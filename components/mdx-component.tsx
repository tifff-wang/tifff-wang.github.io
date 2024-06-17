import * as runtime from 'react/jsx-runtime'
import Image from 'next/image'

const HighlightBlock = ({ children, color = 'yellow' }) => (
    <div
        style={{
            backgroundColor: color,
            padding: '5px 20px 20px 20px',
            margin: '50px auto',
            borderRadius: '5px',
            color: 'black',
            width: '80%',
        }}
    >
        {children}
    </div>
)

const sharedComponents = {
    Image,
    HighlightBlock,
    // Add your global components here
}

const useMDXComponent = (code: string) => {
    const fn = new Function(code)
    return fn({ ...runtime }).default
}

interface MDXProps {
    code: string
    components?: Record<string, React.ComponentType>
}

const MDXContent = ({ code, components }: MDXProps) => {
    const Component = useMDXComponent(code)
    console.log(`MDXContent Component: ${Component}}`)
    return <Component components={{ ...sharedComponents, ...components }} />
}

export default MDXContent
