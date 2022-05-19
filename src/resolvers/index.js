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