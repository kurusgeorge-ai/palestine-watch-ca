// Support & Oppose are for all issues except for the voting track record
// Bad, Ok, Good are for the voting track record
// Unknown is for all issues
export type PositionRating = "support" | "oppose" | "unknown" | "bad" | "ok" | "good"

export interface Issue {
  id: number
  title: string
  description: string
  short_code: string
}

export interface PositionSource {
  url: string
  title?: string
}

export interface PositionDetail {
  position: PositionRating
  sources?: PositionSource[]
  last_update?: string
  notes?: string
  date_recorded?: string
}

export interface MP {
  id: number
  name: string
  party: string
  constituency: string
  province: string
  email?: string
  website?: string
  positions: Record<string, PositionDetail>
}


