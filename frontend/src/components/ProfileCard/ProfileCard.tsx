import React from 'react';
import { ProfileCardType } from './ProfileTypes';

const ProfileCard: React.FC<ProfileCardType> = (props) => {
    return (
        <div className='row-span-1 min-h-[340px] flex flex-col justify-start gap-10 p-10 bg-[#262626] rounded-xl'>
            <div className='flex flex-row justify-between text-xl'>
                <p className='text-pink-600 font-bold'>
                    Session ID : {props.sessionId}
                </p>
                <p className='text-sky-400 font-semibold'>
                    Time: {props.time}
                </p>
            </div>
            <div className='flex flex-col justify-start gap-2 overflow-y-scroll'>
            {
                props.data.map((item) => {
                    return (
                        <div className='flex flex-row justify-around'>
                            <p>
                                {item.url}
                            </p>
                            <p>
                                {item.amount}
                            </p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ProfileCard;