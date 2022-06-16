const Champion = require("../models/champion")

module.exports = {
  champions: async () => {
    try {
      const championsFetched = await Champion.find()
      return championsFetched.map(post => {
        return {
          ...post._doc,
          
        }
      })
    } catch (error) {
      throw error
    }
  },

  champion: async (name) => {
    try {
      const postFetched = await Champion.findOne(name);
      return {
        ...postFetched._doc,
        
      }
    } catch (error) {
      throw error
    }
  },
  championsRarity: async (rarity) => {
    try {
      rareza = rarity.rarity
      const championsFetched = await Champion.find({rarity :  rareza})
      return championsFetched.map(post => {
        return {
          ...post._doc,
          
        }
      })
    } catch (error) {
      throw error
    }
  },
  championsFaction: async (faction) => {
    try {
      
      const championsFetched = await Champion.find(faction)
      return championsFetched.map(post => {
        return {
          ...post._doc,
          
        }
      })
    } catch (error) {
      throw error
    }
  },
  championsElement: async (element) => {
    try {
    
      const championsFetched = await Champion.find(element)
      return championsFetched.map(post => {
        return {
          ...post._doc,
          
        }
      })
    } catch (error) {
      throw error
    }
  },

  championsType: async (type) => {
    try {
      
      const championsFetched = await Champion.find(type)
      return championsFetched.map(post => {
        return {
          ...post._doc,
          
        }
      })
    } catch (error) {
      throw error
    }
  },
  championsMaxAttack: async () => {
    try {
     
      const championsFetched = await Champion.find().sort({'stats.attack': -1}).collation({locale: "en_US", numericOrdering: true})
      return championsFetched.map(post => {
        return {
          ...post._doc,
          
        }
      })
    } catch (error) {
      throw error
    }
  },
  championsMinAttack: async () => {
    try {
     
      const championsFetched = await Champion.find().sort({'stats.attack': 1}).collation({locale: "en_US", numericOrdering: true})
      return championsFetched.map(post => {
        return {
          ...post._doc,
          
        }
      })
    } catch (error) {
      throw error
    }
  },

  championsMaxHealth: async () => {
    try {
     
      const championsFetched = await Champion.find().sort({'stats.health': -1}).collation({locale: "en_US", numericOrdering: true})
      return championsFetched.map(post => {
        return {
          ...post._doc,
          
        }
      })
    } catch (error) {
      throw error
    }
  },
 
  championsMinHealth: async () => {
    try {
     
      const championsFetched = await Champion.find().sort({'stats.health': 1}).collation({locale: "en_US", numericOrdering: true})
      return championsFetched.map(post => {
        return {
          ...post._doc,
          
        }
      })
    } catch (error) {
      throw error
    }
  },

  championsLimit: async (limit) => {
    try {
      var limite = limit.limit
      const championsFetched = await Champion.find().limit(limite)
      return championsFetched.map(post => {
        return {
          ...post._doc,
          
        }
      })
    } catch (error) {
      throw error
    }
  },
  championsSkip: async (skip) => {
    try {
      var saltar = skip.skip
      const championsFetched = await Champion.find().skip(saltar)
      return championsFetched.map(post => {
        return {
          ...post._doc,
          
        }
      })
    } catch (error) {
      throw error
    }
  },
  createChampion: async args => {
    try {
      const { 
        name,
        rarity,
        faction,
        rating,
        type,
        element,
        stats,
        image
      
      } = args.post
      const post = new Champion({
        name,
        rarity,
        faction,
        rating,
        type,
        element,
        stats,
        image
      })
      
      const newPost= await post.save()
      return { ...newPost._doc, _id: newPost.id }
    } catch (error) {
      throw error
    }
  },

  deleteChampion: async (id) => {
    try {
      const deletedPost = await Champion.findByIdAndDelete(id);
      return {
        ...deletedPost._doc,
        
      }
    } catch (error) {
      throw error
    }
  },

  updateChampion: async args => {
    try {
      const { _id, body } = args
      const updatedPost = await Champion.findByIdAndUpdate(_id, { body: body });
      return `Post ${updatedPost.id} updated Successfully!!!`
    } catch (error) {
      throw error
    }
  },
}