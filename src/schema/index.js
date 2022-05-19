const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  """
  A Post refers to available attributes for a Post
  """
  type Stats {
		health: Int!
		attack: Int!
		defense: Int!
		criticalRate: Int!
		criticalDamage: Int!
		speed: Int!
		resistance: Int!
		accuracy: Int!
	}
  type Champion {
    _id: ID!
		name: String!
		rarity: String
		faction: String
		rating: Int
		type: String
		element: String
		stats: Stats!
		image: String
    createdAt: String!
  }
  
  input ChampionType {
    name: String!
		rarity: String
		faction: String
		rating: Int
		type: String
		element: String
		stats: StatsType!
		image: String
  }
  input StatsType {
		health: Int!
		attack: Int!
		defense: Int!
		criticalRate: Int!
		criticalDamage: Int!
		speed: Int!
		resistance: Int!
		accuracy: Int!
	}
  type RootQuery {
    champions: [Champion!]
    champion(name: String!): Champion!
  }
  type Mutation {
    createChampion(champion:ChampionType): Champion,
    deleteChampion(_id: String): Champion,
    updateChampion(_id: String, body: String): String
  }
  schema {
    query: RootQuery
    mutation: Mutation
  }
`);