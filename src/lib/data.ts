import { Issue, MP } from "@/lib/types"

export const defaultIssues: Issue[] = [
  { id: 1, title: "Recognizing genocide in Gaza", description: "Recognition of the situation in Gaza as genocide under international law", short_code: "genocide_recognition" },
  { id: 2, title: "Call for Ceasefire", description: "Public calls for immediate ceasefire in Gaza and occupied territories", short_code: "ceasefire_calls" },
  { id: 3, title: "Arms embargo on Israel", description: "Support for arms embargo and suspension of military aid to Israel", short_code: "arms_embargo" },
  { id: 4, title: "Palestinian statehood recognition", description: "Recognition of Palestinian statehood and right to self-determination", short_code: "statehood_recognition" },
  { id: 5, title: "Voting track record", description: "Overall voting record on parliamentary motions related to Palestinian rights", short_code: "parliament_motions" },
  { id: 6, title: "Israel as apartheid state", description: "Recognition of Israeli policies as constituting apartheid", short_code: "apartheid_recognition" },
  { id: 7, title: "Equating criticism of Israel with antisemitism", description: "Opposition to conflating legitimate criticism of Israeli policies with antisemitism", short_code: "antisemitism_conflation" },
]

  export const MPs: MP[] = [
    {
      id: 1,
      name: "Ziad Aboultaif",
      party: "Conservative",
      constituency: "Edmonton Manning",
      province: "Alberta",
      email: "ziad.aboultaif@parl.gc.ca",
      website: "https://www.ourcommons.ca/members/en/ziad-aboultaif(88849)",
      positions: {
        "genocide_recognition": {
          position: "oppose",
          sources: [
            {
              url: "https://www.cjpme.org/election_guide_2025",
              title: "CJPME Federal Election Guide 2025"
            }
          ],
          last_update: "2024-11-01",
          notes: "Drove away without responding when activists asked him to acknowledge genocide in Gaza",
          date_recorded: "2024-11-01"
        },
        "ceasefire_calls": {
          position: "oppose",
          sources: [
            {
              url: "https://www.ourcommons.ca/members/en/votes/44/1/658",
              title: "Parliamentary Vote 658 - March 18, 2024"
            }
          ],
          last_update: "2024-03-18",
          notes: "Voted against NDP motion calling for ceasefire",
          date_recorded: "2024-03-18"
        },
        "arms_embargo": {
          position: "oppose",
          sources: [
            {
              url: "https://www.ourcommons.ca/members/en/votes/44/1/658",
              title: "Parliamentary Vote 658 - March 18, 2024"
            }
          ],
          last_update: "2024-03-18",
          notes: "Voted against motion to halt arms exports to Israel",
          date_recorded: "2024-03-18"
        },
        "palestinian_statehood": {
          position: "oppose",
          sources: [
            {
              url: "https://www.ourcommons.ca/members/en/votes/44/1/658",
              title: "Parliamentary Vote 658 - March 18, 2024"
            }
          ],
          last_update: "2024-03-18",
          notes: "Opposed parliamentary motion supporting Palestinian state recognition",
          date_recorded: "2024-03-18"
        },
        "parliamentary_voting": {
          position: "bad",
          sources: [
            {
              url: "https://pressprogress.ca/heres-which-members-of-parliament-voted-no-on-a-motion-for-ceasefire-and-ending-arms-exports-to-israel/",
              title: "PressProgress - MPs who voted no on ceasefire motion"
            }
          ],
          last_update: "2024-03-18",
          notes: "Consistently votes against Palestine-related motions",
          date_recorded: "2024-03-18"
        },
        "apartheid_characterization": {
          position: "oppose",
          sources: [
            {
              url: "https://www.cjpme.org/election_guide_2025",
              title: "CJPME Federal Election Guide 2025"
            }
          ],
          last_update: "2024-11-01",
          notes: "Conservative MPs generally reject apartheid characterization of Israel",
          date_recorded: "2024-11-01"
        },
        "antisemitism_conflation": {
          position: "support",
          sources: [
            {
              url: "https://www.cjpme.org/election_guide_2025",
              title: "CJPME Federal Election Guide 2025"
            }
          ],
          last_update: "2024-11-01",
          notes: "Supports IHRA definition that conflates criticism of Israel with antisemitism",
          date_recorded: "2024-11-01"
        }
      }
    },
    {
      id: 2,
      name: "Sima Acan",
      party: "Liberal",
      constituency: "Oakville West",
      province: "Ontario",
      email: "sima.acan@parl.gc.ca",
      website: "https://www.ourcommons.ca/members/en/sima-acan(123456)",
      positions: {
        "genocide_recognition": {
          position: "support",
          sources: [
            {
              url: "https://votepalestine.ca/candidates",
              title: "Vote Palestine - Candidate Endorsements"
            }
          ],
          last_update: "2025-01-15",
          notes: "First Turkish-Canadian MP, endorsed full Vote Palestine platform including genocide recognition",
          date_recorded: "2025-01-15"
        },
        "ceasefire_calls": {
          position: "support",
          sources: [
            {
              url: "https://votepalestine.ca/candidates",
              title: "Vote Palestine - Candidate Endorsements"
            }
          ],
          last_update: "2025-01-15",
          notes: "Campaigned on immediate ceasefire platform",
          date_recorded: "2025-01-15"
        },
        "arms_embargo": {
          position: "support",
          sources: [
            {
              url: "https://votepalestine.ca/candidates",
              title: "Vote Palestine - Candidate Endorsements"
            }
          ],
          last_update: "2025-01-15",
          notes: "Endorsed two-way arms embargo as part of Vote Palestine platform",
          date_recorded: "2025-01-15"
        },
        "palestinian_statehood": {
          position: "support",
          sources: [
            {
              url: "https://votepalestine.ca/candidates",
              title: "Vote Palestine - Candidate Endorsements"
            }
          ],
          last_update: "2025-01-15",
          notes: "Supports immediate Palestinian state recognition",
          date_recorded: "2025-01-15"
        },
        "parliamentary_voting": {
          position: "unknown",
          sources: [],
          last_update: "2025-01-15",
          notes: "Newly elected MP, no parliamentary voting record yet",
          date_recorded: "2025-01-15"
        },
        "apartheid_characterization": {
          position: "support",
          sources: [
            {
              url: "https://votepalestine.ca/candidates",
              title: "Vote Palestine - Candidate Endorsements"
            }
          ],
          last_update: "2025-01-15",
          notes: "Vote Palestine platform includes characterizing Israeli system as apartheid",
          date_recorded: "2025-01-15"
        },
        "antisemitism_conflation": {
          position: "oppose",
          sources: [
            {
              url: "https://votepalestine.ca/candidates",
              title: "Vote Palestine - Candidate Endorsements"
            }
          ],
          last_update: "2025-01-15",
          notes: "Supports distinguishing between criticism of Israel and antisemitism",
          date_recorded: "2025-01-15"
        }
      }
    },
    {
      id: 3,
      name: "Scott Aitchison",
      party: "Conservative",
      constituency: "Parry Sound—Muskoka",
      province: "Ontario",
      email: "scott.aitchison@parl.gc.ca",
      website: "https://www.ourcommons.ca/members/en/scott-aitchison(105340)",
      positions: {
        "genocide_recognition": {
          position: "oppose",
          sources: [
            {
              url: "https://doppleronline.ca/huntsville/those-calling-for-an-israeli-ceasefire-dont-know-what-theyre-asking-for-says-parry-sound-muskoka-mp-scott-aitchison/",
              title: "Huntsville Doppler - Aitchison on ceasefire"
            }
          ],
          last_update: "2024-10-15",
          notes: "Described Israel as 'remarkably inclusive society' and rejected genocide allegations",
          date_recorded: "2024-10-15"
        },
        "ceasefire_calls": {
          position: "oppose",
          sources: [
            {
              url: "https://doppleronline.ca/huntsville/those-calling-for-an-israeli-ceasefire-dont-know-what-theyre-asking-for-says-parry-sound-muskoka-mp-scott-aitchison/",
              title: "Huntsville Doppler - Aitchison on ceasefire"
            }
          ],
          last_update: "2024-10-15",
          notes: "Stated 'Those calling for an Israeli ceasefire don't really know what they're asking for'",
          date_recorded: "2024-10-15"
        },
        "arms_embargo": {
          position: "oppose",
          sources: [
            {
              url: "https://www.ourcommons.ca/members/en/votes/44/1/658",
              title: "Parliamentary Vote 658 - March 18, 2024"
            }
          ],
          last_update: "2024-03-18",
          notes: "Voted against arms embargo motion",
          date_recorded: "2024-03-18"
        },
        "palestinian_statehood": {
          position: "oppose",
          sources: [
            {
              url: "https://www.ourcommons.ca/members/en/votes/44/1/658",
              title: "Parliamentary Vote 658 - March 18, 2024"
            }
          ],
          last_update: "2024-03-18",
          notes: "Opposed parliamentary motion supporting Palestinian state recognition",
          date_recorded: "2024-03-18"
        },
        "parliamentary_voting": {
          position: "bad",
          sources: [
            {
              url: "https://pressprogress.ca/heres-which-members-of-parliament-voted-no-on-a-motion-for-ceasefire-and-ending-arms-exports-to-israel/",
              title: "PressProgress - MPs who voted no on ceasefire motion"
            }
          ],
          last_update: "2024-03-18",
          notes: "Consistently votes against Palestine-related motions",
          date_recorded: "2024-03-18"
        },
        "apartheid_characterization": {
          position: "oppose",
          sources: [
            {
              url: "https://doppleronline.ca/huntsville/those-calling-for-an-israeli-ceasefire-dont-know-what-theyre-asking-for-says-parry-sound-muskoka-mp-scott-aitchison/",
              title: "Huntsville Doppler - Aitchison on ceasefire"
            }
          ],
          last_update: "2024-10-15",
          notes: "Explicitly rejected apartheid characterization, calling Israel 'remarkably inclusive'",
          date_recorded: "2024-10-15"
        },
        "antisemitism_conflation": {
          position: "support",
          sources: [
            {
              url: "https://www.cjpme.org/election_guide_2025",
              title: "CJPME Federal Election Guide 2025"
            }
          ],
          last_update: "2024-11-01",
          notes: "Conservative MPs generally support IHRA definition conflating criticism with antisemitism",
          date_recorded: "2024-11-01"
        }
      }
    },
    {
      id: 4,
      name: "Fares Al Soud",
      party: "Liberal",
      constituency: "Mississauga Centre",
      province: "Ontario",
      email: "fares.al-soud@parl.gc.ca",
      website: "https://www.ourcommons.ca/members/en/fares-al-soud(123033)",
      positions: {
        "genocide_recognition": {
          position: "support",
          sources: [
            {
              url: "https://votepalestine.ca/candidates",
              title: "Vote Palestine - Candidate Endorsements"
            }
          ],
          last_update: "2025-01-15",
          notes: "Palestinian-Canadian MP who endorsed Vote Palestine platform including genocide recognition",
          date_recorded: "2025-01-15"
        },
        "ceasefire_calls": {
          position: "support",
          sources: [
            {
              url: "https://votepalestine.ca/candidates",
              title: "Vote Palestine - Candidate Endorsements"
            }
          ],
          last_update: "2025-01-15",
          notes: "Campaigned on immediate ceasefire platform",
          date_recorded: "2025-01-15"
        },
        "arms_embargo": {
          position: "support",
          sources: [
            {
              url: "https://votepalestine.ca/candidates",
              title: "Vote Palestine - Candidate Endorsements"
            }
          ],
          last_update: "2025-01-15",
          notes: "Endorsed comprehensive arms embargo on Israel",
          date_recorded: "2025-01-15"
        },
        "palestinian_statehood": {
          position: "support",
          sources: [
            {
              url: "https://lethbridgeherald.com/news/national-news/2025/07/25/liberal-mps-call-for-canada-to-join-france-in-recognizing-palestinian-state/",
              title: "Liberal MPs call for Palestinian state recognition"
            }
          ],
          last_update: "2025-07-25",
          notes: "Posted in July 2025 that justice for Palestinians 'demands recognition'",
          date_recorded: "2025-07-25"
        },
        "parliamentary_voting": {
          position: "unknown",
          sources: [],
          last_update: "2025-01-15",
          notes: "Newly elected MP, no parliamentary voting record yet",
          date_recorded: "2025-01-15"
        },
        "apartheid_characterization": {
          position: "support",
          sources: [
            {
              url: "https://votepalestine.ca/candidates",
              title: "Vote Palestine - Candidate Endorsements"
            }
          ],
          last_update: "2025-01-15",
          notes: "Vote Palestine platform includes apartheid characterization",
          date_recorded: "2025-01-15"
        },
        "antisemitism_conflation": {
          position: "oppose",
          sources: [
            {
              url: "https://votepalestine.ca/candidates",
              title: "Vote Palestine - Candidate Endorsements"
            }
          ],
          last_update: "2025-01-15",
          notes: "Supports distinguishing between criticism of Israel and antisemitism",
          date_recorded: "2025-01-15"
        }
      }
    },
    {
      id: 5,
      name: "Dan Albas",
      party: "Conservative",
      constituency: "Central Okanagan—Similkameen—Nicola",
      province: "British Columbia",
      email: "dan.albas@parl.gc.ca",
      website: "https://www.ourcommons.ca/members/en/dan-albas(56928)",
      positions: {
        "genocide_recognition": {
          position: "oppose",
          sources: [
            {
              url: "https://www.cjpme.org/election_guide_2025",
              title: "CJPME Federal Election Guide 2025"
            }
          ],
          last_update: "2024-11-01",
          notes: "Conservative Party position rejects genocide allegations",
          date_recorded: "2024-11-01"
        },
        "ceasefire_calls": {
          position: "oppose",
          sources: [
            {
              url: "https://www.ourcommons.ca/members/en/votes/44/1/658",
              title: "Parliamentary Vote 658 - March 18, 2024"
            }
          ],
          last_update: "2024-03-18",
          notes: "Voted against ceasefire motion",
          date_recorded: "2024-03-18"
        },
        "arms_embargo": {
          position: "oppose",
          sources: [
            {
              url: "https://www.ourcommons.ca/members/en/votes/44/1/658",
              title: "Parliamentary Vote 658 - March 18, 2024"
            }
          ],
          last_update: "2024-03-18",
          notes: "Voted against arms embargo motion",
          date_recorded: "2024-03-18"
        },
        "palestinian_statehood": {
          position: "oppose",
          sources: [
            {
              url: "https://www.ourcommons.ca/members/en/votes/44/1/658",
              title: "Parliamentary Vote 658 - March 18, 2024"
            }
          ],
          last_update: "2024-03-18",
          notes: "Opposed parliamentary motion supporting Palestinian state recognition",
          date_recorded: "2024-03-18"
        },
        "parliamentary_voting": {
          position: "bad",
          sources: [
            {
              url: "https://pressprogress.ca/heres-which-members-of-parliament-voted-no-on-a-motion-for-ceasefire-and-ending-arms-exports-to-israel/",
              title: "PressProgress - MPs who voted no on ceasefire motion"
            }
          ],
          last_update: "2024-03-18",
          notes: "Consistently votes against Palestine-related motions",
          date_recorded: "2024-03-18"
        },
        "apartheid_characterization": {
          position: "oppose",
          sources: [
            {
              url: "https://www.cjpme.org/election_guide_2025",
              title: "CJPME Federal Election Guide 2025"
            }
          ],
          last_update: "2024-11-01",
          notes: "Conservative MPs reject apartheid characterization",
          date_recorded: "2024-11-01"
        },
        "antisemitism_conflation": {
          position: "support",
          sources: [
            {
              url: "https://www.cjpme.org/election_guide_2025",
              title: "CJPME Federal Election Guide 2025"
            }
          ],
          last_update: "2024-11-01",
          notes: "Supports IHRA definition conflating criticism with antisemitism",
          date_recorded: "2024-11-01"
        }
      }
    },
    {
      id: 6,
      name: "Shafqat Ali",
      party: "Liberal",
      constituency: "Brampton—Chinguacousy Park",
      province: "Ontario",
      email: "shafqat.ali@parl.gc.ca",
      website: "https://www.ourcommons.ca/members/en/shafqat-ali(88935)",
      positions: {
        "genocide_recognition": {
          position: "support",
          sources: [
            {
              url: "https://muslimsvote.ca/endorsements/shafqat-al/",
              title: "MuslimsVote endorsement of Shafqat Ali"
            }
          ],
          last_update: "2024-11-01",
          notes: "Supports South Africa's ICJ genocide case against Israel",
          date_recorded: "2024-11-01"
        },
        "ceasefire_calls": {
          position: "support",
          sources: [
            {
              url: "https://muslimsvote.ca/endorsements/shafqat-al/",
              title: "MuslimsVote endorsement of Shafqat Ali"
            }
          ],
          last_update: "2024-11-01",
          notes: "Consistently advocates for immediate ceasefire",
          date_recorded: "2024-11-01"
        },
        "arms_embargo": {
          position: "support",
          sources: [
            {
              url: "https://muslimsvote.ca/endorsements/shafqat-al/",
              title: "MuslimsVote endorsement of Shafqat Ali"
            }
          ],
          last_update: "2024-11-01",
          notes: "Signed 'Arms Embargo Now' petition",
          date_recorded: "2024-11-01"
        },
        "palestinian_statehood": {
          position: "support",
          sources: [
            {
              url: "https://muslimsvote.ca/endorsements/shafqat-al/",
              title: "MuslimsVote endorsement of Shafqat Ali"
            }
          ],
          last_update: "2024-11-01",
          notes: "Supports Palestinian state recognition",
          date_recorded: "2024-11-01"
        },
        "parliamentary_voting": {
          position: "good",
          sources: [
            {
              url: "https://www.ourcommons.ca/members/en/votes/44/1/658",
              title: "Parliamentary Vote 658 - March 18, 2024"
            }
          ],
          last_update: "2024-03-18",
          notes: "Voted for ceasefire and arms embargo motion",
          date_recorded: "2024-03-18"
        },
        "apartheid_characterization": {
          position: "unknown",
          sources: [],
          last_update: "2025-01-15",
          notes: "No public statements characterizing Israel as apartheid state",
          date_recorded: "2025-01-15"
        },
        "antisemitism_conflation": {
          position: "unknown",
          sources: [],
          last_update: "2025-01-15",
          notes: "No clear public position on antisemitism conflation",
          date_recorded: "2025-01-15"
        }
      }
    },
    {
      id: 10,
      name: "Gary Anandasangaree",
      party: "Liberal",
      constituency: "Scarborough—Guildwood—Rouge Park",
      province: "Ontario",
      email: "gary.anandasangaree@parl.gc.ca",
      website: "https://www.pm.gc.ca/en/cabinet/honourable-gary-anandasangaree",
      positions: {
        "genocide_recognition": {
          position: "unknown",
          sources: [],
          last_update: "2025-01-15",
          notes: "No public statements on genocide recognition, though faces constituent pressure",
          date_recorded: "2025-01-15"
        },
        "ceasefire_calls": {
          position: "support",
          sources: [
            {
              url: "https://www.ourcommons.ca/members/en/votes/44/1/658",
              title: "Parliamentary Vote 658 - March 18, 2024"
            }
          ],
          last_update: "2024-03-18",
          notes: "Voted for ceasefire motion despite facing criticism from constituents for being insufficiently vocal",
          date_recorded: "2024-03-18"
        },
        "arms_embargo": {
          position: "support",
          sources: [
            {
              url: "https://www.ourcommons.ca/members/en/votes/44/1/658",
              title: "Parliamentary Vote 658 - March 18, 2024"
            }
          ],
          last_update: "2024-03-18",
          notes: "Voted for arms embargo motion",
          date_recorded: "2024-03-18"
        },
        "palestinian_statehood": {
          position: "support",
          sources: [
            {
              url: "https://www.ourcommons.ca/members/en/votes/44/1/658",
              title: "Parliamentary Vote 658 - March 18, 2024"
            }
          ],
          last_update: "2024-03-18",
          notes: "Supports parliamentary motion working toward Palestinian state recognition",
          date_recorded: "2024-03-18"
        },
        "parliamentary_voting": {
          position: "good",
          sources: [
            {
              url: "https://www.ourcommons.ca/members/en/votes/44/1/658",
              title: "Parliamentary Vote 658 - March 18, 2024"
            }
          ],
          last_update: "2024-03-18",
          notes: "Voted for ceasefire and arms embargo motion",
          date_recorded: "2024-03-18"
        },
        "apartheid_characterization": {
          position: "unknown",
          sources: [],
          last_update: "2025-01-15",
          notes: "No public statements characterizing Israel as apartheid state",
          date_recorded: "2025-01-15"
        },
        "antisemitism_conflation": {
          position: "unknown",
          sources: [],
          last_update: "2025-01-15",
          notes: "No clear public position on antisemitism conflation",
          date_recorded: "2025-01-15"
        }
      }
    }
  ];