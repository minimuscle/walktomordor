export declare namespace User {
  interface UserProfile {
    id: string
    created_at: string
    username: string
    display_name: string
    distance: number
    distance_type: "kilometre" | "mile"
  }
}

export declare namespace Distance {
  interface Fellowship {
    Day: number
    Miles: number
    Kilometres: number
    Change_Miles: string
    Change_Kilometres: string
    Location: string
    Note: string
  }
}
