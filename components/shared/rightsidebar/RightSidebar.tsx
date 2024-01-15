import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import RenderTag from '../rendertag/RenderTag'

const hotQuestions = [
  { _id: '1', title: 'How to make the voices go away'},
  { _id: '2', title: 'How to make the voices go away'},
  { _id: '3', title: 'How to make the voices go away'},
  { _id: '4', title: 'How to make the voices go away'},
  { _id: '5', title: 'How to make the voices go away'},
]

const popularTags = [
  { _id: '1', name: 'javascript', totalQuestions: 17},
  
  { _id: '2', name: 'nextjs', totalQuestions: 22},
  
  { _id: '3', name: 'react', totalQuestions: 35},
  
  { _id: '4', name: 'nodejs', totalQuestions: 20},
  
  { _id: '5', name: 'python', totalQuestions: 13},
  
  { _id: '6', name: 'microsoft azure', totalQuestions: 3},
  
  { _id: '7', name: 'postgresql', totalQuestions: 7},
  
  { _id: '8', name: 'redux', totalQuestions: 5},
]

const RightSidebar = () => {
  return (
    <section className='background-light900_dark200 w-[350px]
    min-h-screen top-0 sticky p-6 light-border right-0 flex flex-col overflow-y-auto
    border-l pt-36 shadow-light-300 dark:shadow-none max-xl:hidden custom-scrollbar max-lg:w-[100px]'>
      <div>
        <h3 className='h3-bold text-dark200_light900'>
          Top Questions
        </h3>
          <div className='mt-7 flex w-full flex-col gap-[30px]'>
              {hotQuestions.map((question) =>(
                <Link
                  href={`/questions/${question._id}`}
                  key={question._id}
                  className='gap-7 cursor-pointer flex items-center
                  justify-between'
                >
                  <p className='body-medium text-dark500_light700'>{question.title}</p>
                  <Image
                    src="/assets/icons/chevron-right.svg"
                    alt="chevronright"
                    width={20}
                    height={20}
                    className="invert-colors"
                  />
                </Link>
              ))}
          </div>
      </div>
      <div className='mt-16'>
      <h3 className='h3-bold text-dark200_light900'>
          Popular Tasks
        </h3>
      <div className='mt-7 flex flex-col gap-4'>
          {popularTags.map((tag) => (
            <RenderTag 
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
          

      </div>
      </div>
    </section>
  )
}

export default RightSidebar