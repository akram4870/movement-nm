import { ArrowNarrowRightIcon, CloudUploadIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/outline'
const features = [
  {
    name: 'Exercise Variety',
    description:
      'Offers a range of exercises to keep rehabilitation engaging and effective, ensuring users stay motivated and make consistent progress.',
    icon: CloudUploadIcon,
  },
  { 
    name: 'Hand Tracking',
    description:
      'Uses advanced hand-tracking technology to monitor and guide movements, ensuring exercises are performed correctly.',
    icon: LockClosedIcon,
  },
  {
    name: 'Gamification',
    description:
      'Incorporates game-like elements to make rehabilitation fun and motivating, transforming the recovery process into an enjoyable experience.',
    icon: ArrowNarrowRightIcon,
  },
  {
    name: 'Real-Time Feedback',
    description:
      'Provides instant feedback to help users improve their performance by offering immediate insights into the accuracy and quality of movements.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Progress Tracking',
    description:
      'Tracks user progress over time to monitor improvements and adjust exercises, helping users and therapists set realistic goals and tailor activities.',
    icon: FingerPrintIcon,
  }
]

export default function Feature() {
  return (
    <div className="bg-white py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-4xl font-semibold leading-7 text-indigo-600">Our Features</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore moveMate's innovative features, empowering stroke survivors to regain mobility and independence with an engaging and effective rehabilitation journey.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
