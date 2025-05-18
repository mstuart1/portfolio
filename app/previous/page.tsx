import { BriefcaseIcon } from '@heroicons/react/24/outline'

const careers = [
  "Marine Biologist studying clownfish in the Philippines",
  "Molecular Biologist collecting water samples in the Arctic",
  "Molecular Marine Biologist studying harmful algal blooms",
  "Graduate researcher studying the chromosomes of marine organisms",
  "Manager of a boutique retail store on a private island",
  "Instructional Technology Specialist for Durham Public Schools in North Carolina",
  "Biology, Chemistry, and Marine Science high school teacher in South Florida",
  "Overnight stockroom manager at Target",
  "Graduation Auditor at Grand Valley State University",
  "Claims specialist for AAA home and auto insurance",
  "Dive Intern for liveaboard sailing operation in the Caribbean",
  "Home school instructor for disabled child in Santiago, Chile",
  "Computer specialist at a small printing company",
  "Clerk at local pharmacy",
]

export default function PreviousPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Previous Careers</h1>
      <p>Before I became a developer, I have had some very interesting employment experiences.</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {careers.map((career, idx) => (
          <li
            key={idx}
            className="flex items-start bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4 border border-gray-100"
          >
            <BriefcaseIcon className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
            <span className="text-gray-800">{career}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}