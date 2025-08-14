import { useEffect, useMemo, useState } from "react"
import { Search, AlertCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { Issue, MP, PositionRating } from "@/lib/types"
import { defaultIssues, MPs } from "@/lib/data"

// Types and data moved to separate files

const partyColors = {
  Liberal: "bg-red-600",
  Conservative: "bg-blue-600",
  NDP: "bg-orange-600",
  "Bloc Québécois": "bg-cyan-600",
  Green: "bg-green-600",
  Independent: "bg-gray-600",
}

function PositionIcon({
  position,
  onClick,
}: {
  position: PositionRating
  onClick?: () => void
}) {
  const baseClasses = "font-bold text-lg cursor-pointer hover:scale-110 transition-transform"

  switch (position) {
    case "support":
      return (
        <span className={`text-green-400 ${baseClasses}`} onClick={onClick}>
          ✓
        </span>
      )
    case "oppose":
      return (
        <span className={`text-red-400 ${baseClasses}`} onClick={onClick}>
          ✗
        </span>
      )
    case "good":
      return (
        <span className={`text-green-400 ${baseClasses}`} onClick={onClick}>
          ✓
        </span>
      )
    case "ok":
      return (
        <span className={`text-yellow-400 ${baseClasses}`} onClick={onClick}>
          ~
        </span>
      )
    case "bad":
      return (
        <span className={`text-red-400 ${baseClasses}`} onClick={onClick}>
          ✗
        </span>
      )
    case "unknown":
    default:
      return (
        <span className={`text-gray-400 ${baseClasses}`} onClick={onClick}>
          ?
        </span>
      )
  }
}

function SourcesModal({
  mp,
  issue,
  isOpen,
  onClose,
}: {
  mp: MP
  issue: Issue
  isOpen: boolean
  onClose: () => void
}) {
  const position = mp.positions[issue.short_code]

  if (!position) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose() }}>
      <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-lg">
            {mp.name} - {issue.title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Position:</span>
            <PositionIcon position={position.position} />
            <span className="capitalize text-white">
              {position.position === "bad"
                ? "Poor voting record"
                : position.position === "ok"
                  ? "Mixed voting record"
                  : position.position === "good"
                    ? "Strong voting record"
                    : position.position}
            </span>
          </div>

          {position.notes && (
            <div>
              <span className="text-gray-400 block mb-1">Notes:</span>
              <p className="text-gray-300">{position.notes}</p>
            </div>
          )}

          {(() => {
            const sources = position.sources ?? []
            const lastUpdate = position.last_update ?? position.date_recorded
            if (sources.length > 0) {
              return (
                <div>
                  <span className="text-gray-400 block mb-2">Sources:</span>
                  <div className="bg-gray-800 rounded-lg p-3 space-y-2">
                    {sources.map((s, idx) => (
                      <a
                        key={`${s.url}-${idx}`}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {s.title || "Source"}
                      </a>
                    ))}
                    {lastUpdate && (
                      <p className="text-gray-500 text-sm mt-1">Last update: {new Date(lastUpdate).toLocaleDateString()}</p>
                    )}
                  </div>
                </div>
              )
            }
            return (
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-gray-400 text-sm">No sources available for this position.</p>
              </div>
            )
          })()}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // ignore
    }
  }, [key, value])

  return [value, setValue] as const
}

export default function App() {
  const [issues, setIssues] = useLocalStorage<Issue[]>("pw:issues", defaultIssues)
  const [mps, setMps] = useLocalStorage<MP[]>("pw:mps", MPs)

  const [searchTerm, setSearchTerm] = useState("")
  const [partyFilter, setPartyFilter] = useState("all")
  const [provinceFilter, setProvinceFilter] = useState("all")
  const [selectedModal, setSelectedModal] = useState<{ mp: MP; issue: Issue } | null>(null)
  const [reportOpen, setReportOpen] = useState(false)
  const [sortBy, setSortBy] = useState<"track" | "name">("track")
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc")

  // Migrate any legacy position fields from localStorage to the new structure
  useEffect(() => {
    let anyChanged = false
    const migratedMps = mps.map((mp) => {
      let mpChanged = false
      const newPositions: Record<string, any> = {}
      for (const [key, pos] of Object.entries(mp.positions)) {
        if (pos && typeof pos === "object") {
          const p: any = { ...pos }
          if (!p.sources && (p.source_url || p.source_title)) {
            p.sources = p.source_url ? [{ url: p.source_url, title: p.source_title }] : []
            delete p.source_url
            delete p.source_title
            mpChanged = true
          }
          newPositions[key] = p
        } else {
          newPositions[key] = pos as any
        }
      }
      if (mpChanged) {
        anyChanged = true
        return { ...mp, positions: newPositions }
      }
      return mp
    })
    if (anyChanged) {
      setMps(migratedMps as MP[])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filteredMPs = useMemo(() => {
    return mps.filter((mp) => {
      const matchesSearch =
        mp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mp.constituency.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesParty = partyFilter === "all" || mp.party === partyFilter
      const matchesProvince = provinceFilter === "all" || mp.province === provinceFilter
      return matchesSearch && matchesParty && matchesProvince
    })
  }, [mps, searchTerm, partyFilter, provinceFilter])

  const sortedMPs = useMemo(() => {
    const trackRecordScore: Record<string, number> = { good: 3, ok: 2, bad: 1, unknown: 0 }
    const getTrackScore = (mp: MP) => {
      const pos = mp.positions["parliament_motions"]?.position || "unknown"
      return trackRecordScore[pos] ?? 0
    }
    const arr = [...filteredMPs]
    if (sortBy === "name") {
      arr.sort((a, b) => sortDir === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
    } else {
      arr.sort((a, b) => sortDir === "asc" ? getTrackScore(a) - getTrackScore(b) : getTrackScore(b) - getTrackScore(a))
    }
    return arr
  }, [filteredMPs, sortBy, sortDir])

  const parties = useMemo(() => [...new Set(mps.map((mp) => mp.party))], [mps])
  const provinces = useMemo(() => [...new Set(mps.map((mp) => mp.province))], [mps])

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <header className="border-b border-gray-800 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h1 className="text-2xl font-bold text-white">Canadian MP Palestine Tracker</h1>
                <p className="text-gray-400 text-sm mt-1">Tracking MP positions on key Palestine-related issues</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  onClick={() => setReportOpen(true)}
                >
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Report an issue
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search MPs or constituencies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <Select value={partyFilter} onValueChange={setPartyFilter}>
              <SelectTrigger className="w-full md:w-48 bg-gray-900 border-gray-700 text-white">
                <SelectValue placeholder="Filter by party" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="all">All Parties</SelectItem>
                {parties.map((party) => (
                  <SelectItem key={party} value={party}>
                    {party}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={provinceFilter} onValueChange={setProvinceFilter}>
              <SelectTrigger className="w-full md:w-48 bg-gray-900 border-gray-700 text-white">
                <SelectValue placeholder="Filter by province" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="all">All Provinces</SelectItem>
                {provinces.map((province) => (
                  <SelectItem key={province} value={province}>
                    {province}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={(v) => setSortBy(v as "track" | "name")}>
              <SelectTrigger className="w-full md:w-56 bg-gray-900 border-gray-700 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="track">Track Record</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortDir} onValueChange={(v) => setSortDir(v as "asc" | "desc")}>
              <SelectTrigger className="w-full md:w-56 bg-gray-900 border-gray-700 text-white">
                <SelectValue placeholder="Order" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="desc">{sortBy === "name" ? "Z → A" : "Best → Worst"}</SelectItem>
                <SelectItem value="asc">{sortBy === "name" ? "A →Z " : "Worst → Best"}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <p className="text-gray-400 text-sm">
              Showing {filteredMPs.length} of {mps.length} MPs
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead className="bg-gray-800 border-b border-gray-700">
                  <tr>
                    <th className="text-left p-4 pr-3 text-white font-semibold w-40 md:w-48 lg:w-56">MP</th>
                    {issues.map((issue) => (
                      <th key={issue.id} className="p-2 align-bottom w-20">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="cursor-help hover:opacity-90">
                              <span className="block text-white font-semibold leading-snug text-[11px] md:text-sm text-center break-words header-clamp">
                                {issue.title}
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-800 border-gray-600 text-white max-w-xs">
                            <div>
                              <p className="font-semibold">{issue.title}</p>
                              <p className="text-sm text-gray-300 mt-1">{issue.description}</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                    {sortedMPs.map((mp) => (
                    <tr key={mp.id} className="border-b border-gray-700 hover:bg-gray-800/50">
                      <td className="p-4 pr-3 w-40 md:w-48 lg:w-56">
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="font-semibold text-white">{mp.name}</div>
                            <div className="text-sm text-gray-400">
                              {mp.constituency}, {mp.province}
                            </div>
                          </div>
                          <Badge className={`${partyColors[mp.party as keyof typeof partyColors]} text-white text-xs ml-auto`}>
                            {mp.party}
                          </Badge>
                        </div>
                      </td>
                      {issues.map((issue) => {
                        const position = mp.positions[issue.short_code]
                        return (
                          <td key={issue.id} className="text-center p-2">
                            <PositionIcon
                              position={position?.position || "unknown"}
                              onClick={() => setSelectedModal({ mp, issue })}
                            />
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {filteredMPs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No MPs found matching your criteria.</p>
            </div>
          )}
        </div>
        </main>

        <footer className="border-t border-gray-800 bg-gray-950 mt-12">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="text-center text-gray-400 text-sm">
              <p className="mb-2">Data sourced from public statements, parliamentary records, and media reports.</p>
              <p>This is a community-driven project. All sources are provided for transparency.</p>
            </div>
          </div>
        </footer>

        <Dialog open={reportOpen} onOpenChange={setReportOpen}>
          <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-lg">Report an issue</DialogTitle>
              <DialogDescription className="text-gray-300">
                If you notice a discrepancy or missing/incorrect information, please email us with details so we can
                investigate.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3 text-gray-300">
              <p>
                Email: <a className="text-blue-400 hover:text-blue-300" href="mailto:kurusgeorge@gmail.com?subject=Palestine%20Watch%20Issue%20Report">kurusgeorge@gmail.com</a>
              </p>
              <p className="text-sm text-gray-400">
                Include: MP name, issue, what seems wrong, links to sources, and any other relevant context.
              </p>
            </div>
          </DialogContent>
        </Dialog>

        {selectedModal && (
          <SourcesModal
            mp={selectedModal.mp}
            issue={selectedModal.issue}
            isOpen={!!selectedModal}
            onClose={() => setSelectedModal(null)}
          />)
        }
      </div>
    </TooltipProvider>
  )
}


