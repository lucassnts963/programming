import axios from 'axios'
import Image from 'next/image'

import { timestamp } from '../../../common/utils/dateFormatted'

const api = axios.create({
  baseURL: 'https://www.tabnews.com.br/api/v1'
})

export default async function BlogPage() {
  const response = await api.get('/contents/elucas')
  const post = response.data.filter((value) => value.parent_id === null)
  console.log(post)

  return (
    <main className='flex flex-col items-center'>
      <h1 className='text-4xl font-bold my-6'>Artigos</h1>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
        {
          post.map((item) => (
            <div key={item.id} className='flex flex-col w-72 rounded-2xl overflow-hidden bg-zinc-800'>
              <Image
                src={`https://www.tabnews.com.br/api/v1/contents/elucas/${item.slug}/thumbnail`}
                width={960}
                height={540}
              />

              <div className='flex flex-wrap text-sm p-2 text-zinc-400 gap-2'>
                <span>{item.tabcoins} tabcoins</span>
                <span>{item.children_deep_count} comentários</span>
                <span>{timestamp(item.published_at)}</span>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  )
}