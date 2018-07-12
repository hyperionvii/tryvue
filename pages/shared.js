import axios from 'axios'

export async function init({store, isClient}) {
  if(isClient) return

  try{
    const res = await axios.get('https://todos-hzdoayyvaw.now.sh/todos')
    store.commit('init', res.data)
  }catch(error){
    store.commit('init', [])
  }
}
