import React from "react";
import Markdown from 'react-markdown'

// Markdown
const BriefData = [
    {
        text: `**What is Bitcoin?**

Bitcoin is a decentralized digital currency, without a central bank or single administrator, 
that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. 
Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger 
called a blockchain. Bitcoin was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.
 The currency began use in 2009 when its implementation was released as open-source software. Bitcoin is often called the 
 first cryptocurrency, although prior systems existed and it is more correctly described as the first decentralized digital 
 currency. Bitcoin is more correctly described as the first decentralized digital currency. It is the largest of its kind 
 in terms of total market value. Bitcoin is also the most widely used and recognized cryptocurrency. It is estimated that 
 over 100,000 merchants worldwide accept bitcoin as payment.
       `,
    },
    {
        text: `**Lorem Ipsum**
        
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


`,
    }
];

function Brief() {
    return (
        <section className="flex flex-col gap-3">
            {
                BriefData.map((data, index) => (
                    <Markdown key={index} children={data.text} />
                ))
            }
        </section>
    );
}

export default Brief;
