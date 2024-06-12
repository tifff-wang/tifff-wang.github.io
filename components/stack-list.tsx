import { stacksToArray } from '@/lib/utils'

interface StackListProp {
    stacks: string
}

function StackList({ stacks }: StackListProp) {
    const stackArray = stacksToArray(stacks)
    return (
        <div>
            <ul className="stack-list">
                {stackArray.map((stack, index) => (
                    <li key={index}>
                        {stack}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StackList
