/* eslint-disable @next/next/no-img-element */
import React from 'react'

const FAQ = () => {
  return (
    <div>
      <div className="px-4 py-20 bg-lightblue">
    <div className="flex flex-col max-w-6xl mx-auto md:flex-row">
        <h2 className="w-full pb-6 mr-8 text-3xl text-yellow-400 font-extrabold leading-9 md:w-1/3">
            Frequently-asked questions
        </h2>
        <dl className="w-full md:w-2/3">
            <dt className="mb-4">
                <h3 className="text-xl  text-yellow-400 font-semibold">
                 What can I expect in Therapy?
                </h3>
            </dt>
            <dd className="mb-16  text-white">
                <p>
                Each person has different issues and goals for therapy. 
                Therapy will be different depending on the individual. 
                In general, you can expect to discuss the current events 
                happening in your life, your personal history relevant to 
                your issue, and report progress (or any new insights gained) 
                from the previous therapy session. Depending on your specific needs, 
                therapy can be short-term, for a specific issue, or longer-term, 
                to deal with more difficult patterns or your desire for more 
                personal development.
                </p>
            </dd>
            <dt className="mb-4">
                <h3 className="text-xl font-semibold  text-yellow-400">
                    How can therapy help me?
                </h3>
            </dt>
            <dd className="mb-16  text-white">
                <p>
                Several benefits are available from participating in therapy. Therapists can
                provide support, problem-solving skills, and enhanced coping strategies for
                depression, anxiety, relationship troubles, unresolved childhood issues, grief,
                stress management, body image issues, and creative blocks. Many people
                also find that counselors can be a tremendous asset in managing personal
                growth, interpersonal relationships, family concerns, marriage issues, and the
                hassles of daily life. Therapists can provide a fresh perspective on a complex
                problem or point you toward a solution.

                </p>
            </dd>
            <dt className="mb-4 text-yellow-400">
                <h3 className="text-xl font-semibold">
                    Do you take insurance, and how does that work?
                </h3>
            </dt>
            <dd className="mb-16 text-white">
                <p>To determine if you have mental health coverage through your insurance carrier,
                   the first thing you should do is call them. Review your insurance policy coverage
                   carefully and make sure you understand their answers. Some helpful questions you 
                   can ask your insurance provider:
                <br/><br/>
                <li>What Are My Mental Health Benefits?</li>
                <li>What Is The Coverage Amount Per Therapy Session?</li>
                <li>How Much Is My Co-pay?</li>
                <li>Do I Need Prior Authorizations?</li>
                <li>How Many Therapy Sessions Does My Plan Cover?</li>
                <li>How Much Does My Insurance Pay For An Out-Of-Network Provider?</li>

                </p>
            </dd>
            <dt className="mb-4 text-yellow-400">
                <h3 className="text-xl font-semibold">
                    How long is each session?
                </h3>
            </dt>
            <dd className="mb-16 text-white">
                <p>
                Each Session Is About 45 Minutes To An Hour.

                </p>
            </dd>
        </dl>
    </div>
</div>
    </div>
  )
}

export default FAQ