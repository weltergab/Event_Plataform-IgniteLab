import { gql, useQuery } from '@apollo/client'
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED){
            id
            lessonType
            availableAt
            title 
            slug
        }
    }
`

interface GetLessonsQueryResponse {
    lessons: Array<{
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'
    }>
}

export function Sidebar() {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

    return (
        <aside className="w-[348] bg-gray-700 p-6 border-1 border-gray-600">
            <h1>Sidebar</h1>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gab-8">
                {data?.lessons.map(lesson => {
                    return (
                <Lesson
                    title={lesson.title}
                    slug={lesson.slug}
                    availableAt={new Date()}
                    type={lesson.lessonType}
                />
                )
                })}
            </div>
        </aside>
    )
}