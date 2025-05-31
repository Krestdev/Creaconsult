import { Dictionary } from '@/lib/i18n'
import React from 'react'

interface DomainsProps {
    dictionary: Dictionary
}

interface DomainType {
    title: string;
    contain: Array<string>;
}

const Domains = ({ dictionary }: DomainsProps) => {
    const domains: DomainType[] = dictionary.domain;

    return (
        <div className='w-full flex justify-center pb-10'>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-[1505px] px-5 xl:px-2">
                <h2 className="col-span-1 md:col-span-2 xl:col-span-4 font-semibold">
                    {dictionary.domainTitle}
                </h2>
                {domains.map((domain, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-4 p-4 bg-white shadow-lg justify-between"
                    >
                        <h4 className='h-full flex items-end'>{domain.title}</h4>
                        <ul className="list-disc pl-10">
                            {domain.contain.map((item, index) => (
                                <li key={index} className="text-gray-700">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Domains
