import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';


const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'remote-work', 'jobs'];
const random = ['variants', 'epic'];

const ChannelBar = () => {
    return (
        <div className="w-80 min-h-screen m-0 ml-16 bg-gray-200 dark:bg-gray-800 
                        shadow-lg overflow-hidden">
            <Heading />
            <div className='flex flex-col items-center justify-start p-1 m-0'>
                <Dropdown header='Topics' sections={topics} />
                <Dropdown header='Questions ' sections={questions} />
                <Dropdown header='Random' sections={random} />
            </div>
        </div>
    )
}

const Dropdown = ({ header, sections }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className='m-0 w-full px-2 pb-2 transition duration-300 ease-in-out'>
            <div className='dropdown-header' onClick={() => setExpanded(!expanded)}>
                <ArrowIcon intilalState={expanded} />
                <h1 className={expanded ? 'dropdown-openState' : 'dropdown-closedState'}>
                    {header}
                </h1>
                <FaPlus size='14' className='text-accent text-opacity-80 my-auto ml-auto' />
            </div>
            {expanded && sections && sections.map((section) => <Subtopics section={section} />)}
        </div>
    )
}

const Subtopics = ({ section }) => (
    <div className='dropdown-sub'>
        <BsHash size='24' className='text-gray-400' />
        <h1 className='dropdown-text'>{section}</h1>
    </div>
)

const ArrowIcon = ({ intilalState }) => {
    const chevClass = 'text-accent text-opacity-80 my-auto mr-1'
    return (
        intilalState ? (
            <FaChevronDown size='14' className={chevClass} />
        ) : (
            <FaChevronRight size='14' className={chevClass} />
        )
    )
}

const Heading = () => (
    <div className="flex items-center justify-center h-16 m-0 p-0">
        <h1 className='text-lg tracking-wider font-bold text-gray-600 dark:text-gray-400 mr-auto ml-4 my-auto align-middle'>
            Channels
        </h1>
    </div>
)

export default ChannelBar;