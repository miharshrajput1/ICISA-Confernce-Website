import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Submission() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Paper Submission</h1>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="guidelines" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="topics">Topics of Interest</TabsTrigger>
            <TabsTrigger value="guidelines">Submission Guidelines</TabsTrigger>
            <TabsTrigger value="submit">Submit Paper</TabsTrigger>
          </TabsList>

<TabsContent value="topics" className="mt-6">
  <Card>
    <CardHeader>
      <CardTitle>Topics of Interest</CardTitle>
      <CardDescription>Technical tracks and associated topics</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Track 1 */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Deep Learning Architectures and Algorithms</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Deep Learning Architectures and Algorithms</li>
            <li>Reinforcement Learning</li>
            <li>Generative Models and GANs</li>
            <li>Transfer Learning and Meta-Learning</li>
            <li>Unsupervised and Self-supervised Learning</li>
            <li>Bayesian Methods and Probabilistic Models</li>
            <li>Optimization Techniques for AI</li>
            <li>Explainable AI and Interpretable Models</li>
            <li>Federated Learning and Distributed AI</li>
            <li>Neural-Symbolic Integration</li>
          </ul>
        </div>

        {/* Track 2 */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Healthcare and Medical Informatics</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Healthcare and Medical Informatics</li>
            <li>Smart Cities and Urban Computing</li>
            <li>Intelligent Transportation Systems</li>
            <li>Financial Technology and Predictive Analytics</li>
            <li>Environmental Monitoring and Sustainability</li>
            <li>Smart Manufacturing and Industry 4.0</li>
            <li>Robotics and Autonomous Systems</li>
            <li>Human-Computer Interaction</li>
            <li>Education Technology</li>
            <li>Recommender Systems</li>
          </ul>
        </div>

        {/* Track 3 */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Augmented and Virtual Reality</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Augmented and Virtual Reality</li>
            <li>3D Display Technologies</li>
            <li>Robotics and Spatial Perception</li>
            <li>Optical Systems and Holography</li>
            <li>3D Imaging and Reconstruction</li>
            <li>Depth Sensing and Stereo Vision</li>
            <li>Sensor Fusion for 3D Applications</li>
            <li>Human-Computer Interaction in 3D Environments</li>
            <li>SLAM and Environment Mapping</li>
            <li>3D Visualization and Rendering</li>
          </ul>
        </div>

        {/* Track 4 */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Power System Stability</h3>
<ul className="list-disc pl-6 space-y-1">
  <li>Cascading Failure Prevention</li>
  <li>State Estimation & Contingency</li>
  <li>AGC & Load Frequency Control</li>
  <li>FACTS Devices</li>
  <li>Grid Cybersecurity</li>
  <li>Renewable Integration Challenges</li>
  <li>Microgrid Stability</li>
  <li>Power Quality Management</li>
  <li>AI/ML for Grid Stability</li>
  <li>Black Start Strategies</li>
</ul>
        </div>
      </div>
    </CardContent>
  </Card>
</TabsContent>

<TabsContent value="guidelines" className="mt-6">
  <Card>
    <CardHeader>
      <CardTitle>Submission Guidelines</CardTitle>
      <CardDescription>Important guidelines for paper submission</CardDescription>
    </CardHeader>
    <CardContent className="space-y-5">
      {/* Section A */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold"><strong>A.</strong> Guidelines for Paper Submission</h3>
        <div className="space-y-2 pl-3">
          <p>1. Authors are invited to submit their paper electronically written in English, with a length of up to 10 pages, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full papers presenting original research</li>
            <li>Innovative theoretical papers</li>
            <li>Short papers with partially completed but theoretically established ideas</li>
          </ul>
          <p>2. All submissions must be made electronically through the <a href="#" className="text-blue-600 hover:underline">Submission Management System</a>. Accepted and presented papers will be submitted to <em>Procedia Computer Science Journal, Elsevier</em> for publication.</p>
          <p>3. All manuscripts undergo triple-blind peer-review by at least three reviewers.</p>
          <p>4. Page limits:</p>
          <div className="grid grid-cols-2 gap-3 pl-3">
            <div className="p-2 border rounded">
              <p className="font-medium">Minimum: 3 pages</p>
              <p className="font-medium">Maximum: 10 pages</p>
            </div>
            <div className="p-2 border rounded">
              <p>Additional pages charged at:</p>
              <p className="font-semibold">₹1,100/page</p>
            </div>
          </div>
          <p>5. Acceptance notifications released after completion of peer review process.</p>
        </div>
      </div>

      {/* Section B */}
      <div className="space-y-3 pt-3">
        <h3 className="text-lg font-bold"><strong>B.</strong> Plagiarism Policy</h3>
        <div className="space-y-2 pl-3">
          <p>• Must use licensed plagiarism tools (e.g., Turnitin) with ≤10% similarity</p>
          <p>• Strict prohibition of self-plagiarism and unoriginal content</p>
          <p>• Proper citation required for any borrowed material</p>
          <p>• Obtain permissions for copyrighted material usage</p>
          <p>• Language must be original, not copied from source materials</p>
        </div>
      </div>

      {/* Section C */}
      <div className="space-y-3 pt-3">
        <h3 className="text-lg font-bold"><strong>C.</strong> Use of Generative AI</h3>
        <p className="pl-3">
          Authors must comply with Elsevier's 
          <a href="https://www.elsevier.com/about/policies/publishing-ethics" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-blue-600 hover:underline ml-1">
            AI policy guidelines
          </a>
        </p>
      </div>

      {/* Section D */}
      <div className="space-y-3 pt-3">
        <h3 className="text-lg font-bold"><strong>D.</strong> Publications & Indexing</h3>
        <div className="pl-3 space-y-1">
          <p>• Triple-blind review process</p>
          <p>• Indexing includes:</p>
          <div className="grid grid-cols-2 gap-1 pl-3">
            <div className="flex items-center">
              <span className="mr-2">✓</span>Web of Science
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>Scopus
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>INSPEC
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>Engineering Index
            </div>
          </div>
          <p className="mt-1"><em>Procedia Computer Science</em> metrics:</p>
          <div className="flex gap-3 pl-3">
            <div className="p-1.5">
              h-index: <span className="font-bold">140</span>
            </div>
            <div className="p-1.5">
              CiteScore: <span className="font-bold">4.5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section E */}
      <div className="space-y-3 pt-3">
        <h3 className="text-lg font-bold"><strong>E.</strong> Best Paper Awards</h3>
        <div className="pl-3 space-y-2">
          <div className="p-2 border rounded">
            <p className="font-semibold">1. Regular Best Paper Award</p>
            <p className="text-sm">Most significant contribution to the conference</p>
          </div>
          <div className="p-2 border rounded">
            <p className="font-semibold">2. Best Student Paper Award</p>
            <p className="text-sm">Main author must be a student</p>
          </div>
          <div className="p-2 border rounded">
            <p className="font-semibold">Additional Opportunities:</p>
            <p className="text-sm">Top papers may be invited for extension and publication in WoS/SCOPUS indexed journals</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</TabsContent>

          <TabsContent value="submit" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Submit Your Paper</CardTitle>
                <CardDescription>Use the submission system to submit your paper</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p>
                  Paper submission for ICISA 2026 is handled through the EasyChair conference management system. Please
                  follow the steps below to submit your paper:
                </p>

                <ol className="list-decimal pl-6 space-y-2">
                  <li>Prepare your paper according to the Elsevier Format</li>
                  <li>Remove all author information from the paper for double-blind review</li>
                  <li>Convert your paper to PDF format</li>
                  <li>Go to the ICISA 2026 submission page on EasyChair</li>
                  <li>Create an account if you don't have one</li>
                  <li>Follow the instructions to submit your paper</li>
                </ol>

<div className="flex justify-center mt-4">
  <Button className="text-white">
    <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
      Go to Submission System
    </a>
  </Button>
</div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mt-6">
                  <h3 className="text-lg font-semibold text-yellow-800">Note</h3>
                  <p className="text-yellow-800">
                    The submission system will open on August 1, 2025. Please check back later.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
