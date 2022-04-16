
export type userType = {
    id: number,
    name: string,
    email: string,
    type: userTypeKey,
    age: number,
}

export enum userTypeKey {
    ADMIN= "ADMIN",
    NORMAL= 'NORMAL'
}

export const users:userType[] = [
   {
       id: 1,
       name: "Alice",
       email: "alice@email.com",
       type: userTypeKey.ADMIN,
       age: 12
   },
   {
       id: 2,
       name: "Bob",
       email: "bob@email.com",
       type: userTypeKey.NORMAL,
       age: 36
   },
   {
       id: 3,
       name: "Coragem",
       email: "coragem@email.com",
       type: userTypeKey.NORMAL,
       age: 21
   },
   {
       id: 4,
       name: "Dory",
       email: "dory@email.com",
       type: userTypeKey.NORMAL,
       age: 17
   },
   {
       id: 5,
       name: "Elsa",
       email: "elsa@email.com",
       type: userTypeKey.ADMIN,
       age: 17
   },
   {
       id: 6,
       name: "Fred",
       email: "fred@email.com",
       type: userTypeKey.ADMIN,
       age: 60
   }
]