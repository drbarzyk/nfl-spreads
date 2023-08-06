export interface Team {
    id: string;  // teamId (primary)
    type: string;
    abbreviation: string;
    displayName: string;
}

export interface Game {
    id: string;  // gameId (primary)
    week: number;
    season: number;
    date: string;
    name: string;
    shortName: string;
    teamIds: string[];  // Array of team IDs
    homeAway: {
        [teamId: string]: "home" | "away";  // Map team ID to home or away
    };
    period: number;
    displayClock: string;
    clock: number;
    statusType: {
        id: string;
        name: string;
        description: string;
        state: string;
        completed: boolean;
        detail: string;
        shortDetail: string;
    };
    scores: {
        [teamId: string]: number;  // Map team ID to score
    };
    odds: {
        favorite: string;
        underdog: string;
        spread: number;
    };
    // Other game related information
}
