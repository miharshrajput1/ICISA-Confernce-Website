import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Tracks() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Conference Tracks</h1>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="track1" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="track1">Track 1</TabsTrigger>
            <TabsTrigger value="track2">Track 2</TabsTrigger>
            <TabsTrigger value="track3">Track 3</TabsTrigger>
            <TabsTrigger value="track4">Track 4</TabsTrigger>
          </TabsList>

          <TabsContent value="track1" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Track 1: Artificial Intelligence and Machine Learning</CardTitle>
                <CardDescription className="text-lg">AI/ML, Deep Learning, Federated Learing, NLP</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  This track focuses on the theoretical foundations, algorithms, and methodologies in artificial
                  intelligence and machine learning. It covers a wide range of topics including but not limited to:
                </p>

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

                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Track Chairs</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Dr. Gautam Kumar (NIT Delhi)</li>
                    <li>Dr. Mahesh K. Singh (NIT Delhi)</li>
                    <li>Dr. Arun Kumar (PEC Chandigarh)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="track2" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Track 2: Smart Systems</CardTitle>
                <CardDescription className="text-lg">Real-world Applications and Systems</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  This track explores the applications of intelligent systems in various domains and the development of
                  intelligent systems. Topics include:
                </p>

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

                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Track Chairs</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Dr. Piyush Kumar (NIT Patna)</li>
                    <li>Dr. Nagendra (NIT Jalandhar)</li>
                    <li>Dr. Jitendra Kumar (IIIT Sonepat)</li>                    
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="track3" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Track 3: 3D Display and Robotics</CardTitle>
                <CardDescription className="text-lg"> AR/VR/Robotics/Optical Systems/3D Imaging</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  This track focuses on technologies and methodologies for processing and understanding natural language
                  and visual data. Topics include:
                </p>

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


                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Track Chairs</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Dr. Gyanendra Sheoran (NIT Delhi)</li>
                    <li>Dr. Ghanshyam Singh (MNIT Jaipur)</li>
                    <li>Dr. Naveen Kumar (IIIT Vadodara) </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="track4" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Track 4: Power System Stability, Operation, Control and Protection</CardTitle>
                <CardDescription>Cutting-edge Research and Future Trends</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  This track explores emerging technologies and future directions in intelligent systems and
                  applications. Topics include:
                </p>

<ul className="list-disc pl-6 space-y-1">
  <li>Transient Stability Analysis and Enhancement</li>
  <li>Power System Operation and Electricity Market Structures</li>
  <li>Wide-Area Monitoring and Control Systems (WAMS)</li>
  <li>Voltage and Frequency Regulation Strategies</li>
  <li>Protective Relay Coordination and System Protection</li>
  <li>Grid Resilience and Cascading Failure Prevention</li>
  <li>Power System State Estimation and Contingency Analysis</li>
  <li>Automatic Generation Control (AGC) and Load Frequency Control</li>
  <li>FACTS Devices and Flexible Power System Operation</li>
  <li>Cybersecurity in Power System Protection</li>
</ul>


                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Track Chairs</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Dr. Sachin Singh (NIT Delhi)</li>
                    <li>Dr. Devasuth Govind (NIT Delhi)</li>
                    <li>Dr. Arun Balodi (Dayanand Sagar University, Bangalore)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
