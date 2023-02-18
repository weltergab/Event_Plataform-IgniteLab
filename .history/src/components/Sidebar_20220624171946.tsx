import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED){
            
        }
    }
`

export function Sidebar() {
    return (
        <aside className="w-[348] bg-gray-700 p-6 border-1 border-gray-600">
            <h1>Sidebar</h1>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gab-8">
                <Lesson 
                title="Aula 1"
                slug="aula-1"
                availableAt={new Date()}
                type="class"
                />
            </div>
        </aside>
    )
}