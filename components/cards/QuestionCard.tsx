
import React from 'react'
import RenderTag from '../shared/rendertag/RenderTag'
import Metric from '../shared/Metric'
import { formatBigNumber, getTimeStamp } from '@/lib/utils'

interface QuestionProps {
    _id: string
    title: string
    tags: {
        _id: string
        name: string
    }[];
    author: {
        _id: string
        name: string
        picture: string
    }
    upvotes: number
    views: number
    answers: Array< object >;
    createdAt: Date
}

const QuestionCard = ({
    _id,
    title,
    tags,
    author,
    upvotes,
    views,
    answers,
    createdAt
}: QuestionProps ) => {
  return (
    <div className='card-wrapper p-9 sm:px-11 rounded-[10px]'>
        <div className='flex flex-col-reverse items-start
        justify-between gap-5 sm:flex-row'>
            <div>
                <span className='subtle-regular
                text-dark400_light700 line-clamp-1 flex sm:hidden'>
                    {getTimeStamp(createdAt)}
                </span>
                <a href={`/question/${_id}`}>
                    <h3 className='sm:h3-semibold base-semibold
                    text-dark200_light900 line-clamp-1 flex-1 font-spaceGrotesk'>
                        {title}
                    </h3>
                </a>
            </div>
        </div>

        <div className='mt-3.5 flex flex-wrap gap-2'>
        {tags.map((tag) => (
  <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
))}
</div>

        <div className='flex-between gap-3 mt-6 w-full flex-wrap'>
            <Metric 
                imgUrl="/assets/icons/avatar.svg"
                alt='user'
                title={` - asked ${getTimeStamp(createdAt)}`}
                href={`/profile/${author._id}`}
                value={author.name}
                textStyles="body-medium text-dark400_light700"
            />
             <Metric 
                imgUrl="/assets/icons/like.svg"
                alt='ProfilePic'
                title="Votes"
                value={formatBigNumber(upvotes)}
                textStyles="small-medium text-dark400_light800"
            />
            <Metric 
                imgUrl="/assets/icons/message.svg"
                alt='messages'
                title="Answers"
                value={formatBigNumber(answers.length)}
                textStyles="small-medium text-dark400_light800"
            />
             <Metric 
                imgUrl="/assets/icons/eye.svg"
                alt='eye'
                title="Views"
                value={formatBigNumber(views)}
                textStyles="small-medium text-dark400_light800"
            />
        </div>

    </div>
  )
}

export default QuestionCard