// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

export const typeDefs = `#graphql

# SECTION: Developer Notes:
    # Here '!' represents its a required, cant have null
    # this represents a array of [string] and as required



type Author{
    id: ID!,
    name:String!,
    verified: Boolean!,
    reviews: [Review!]
}

type Game{
    id: ID!,
    title: String!,
    platform: [String!]!, # here the string is required and the array is also required
    reviews: [Review!] # here the string is required and the array is not required ca be optional
}

type Review {
    id: ID!,
    rating: Float!,
    content: String!,
    game: Game!,
    author: Author!
}



# NOTE:  The "Query" type is special: it lists all of the available queries that clients can execute, along with the return type for each

type Query {
    # SECTION Review QRY
    reviews_QRY_ALL: [Review]
    review_QRY_BY_ID(id:ID!): Review

    # SECTION Game QRY
    games_QRY_ALL: [Game]
    game_QRY_BY_ID(id:ID!): Game


    # SECTION Author QRY
    authors_QRY_ALL: [Author]
    author_QRY_BY_ID(id:ID!): Author
}

# NOTE: to change or write data to a GraphQL service, we need the schema to include a new fundamental type: the Mutation type!
type Mutation{
    deleteGame(id: ID!) : [Game]
    addGame(vGame: AddGameInput!) : Game
    updateGame(id: ID!, edit: EditGameInput!) : Game
}

# NOTE: input group
input AddGameInput {
    title: String!,
    platform: [String!]!
}

input EditGameInput {
    title: String,
    platform: [String!]
}



`;

// NOTE: Types: int, float, string, boolean, ID
