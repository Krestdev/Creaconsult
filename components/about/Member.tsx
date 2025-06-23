import { FacebookLogo, GoogleLogo, LinkedinLogo } from 'phosphor-react';
import React from 'react'

interface Personel {
    name: string;
    post: string;
    img: string;
    links: {
        linkedin: string;
        facebook: string;
        email: string;
    };
}
interface Props {
    personel: Personel
}
const Member = ({ personel }: Props) => {
    return (
        <div
            className="relative w-full md:max-w-[300px] h-fit flex justify-center items-center"
        >
            <img
                src={personel.img}
                alt={personel.name}
                className=" w-full h-[400px] object-cover"
            />
            <div className="space-y-2 absolute bottom-0 left-0 p-4 bg-gradient-to-b from-transparent to-[var(--primary)] w-full">
                <h6 className="text-white">{personel.name}</h6>
                <p className="text-white">{personel.post}</p>
                <div className="flex gap-2">
                    <div className="flex p-1 justify-center items-center bg-white text-[var(--primary)] rounded-full w-fit h-fit">
                        <GoogleLogo size={16} />
                    </div>
                    <div className="flex p-1 justify-center items-center bg-white text-[var(--primary)] rounded-full w-fit h-fit">
                        <FacebookLogo size={16} />
                    </div>
                    <div className="flex p-1 justify-center items-center bg-white text-[var(--primary)] rounded-full w-fit h-fit">
                        <LinkedinLogo size={16} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member
