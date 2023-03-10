import Head from 'next/head'
import SkillsStyles from '../styles/Skills.module.css'
import { 
	FaGithub,
	FaTwitter,
	FaLinkedin,
	FaNodeJs,
 } from "react-icons/fa"
 import { 
	SiHashnode,
	SiPython,
	SiJavascript,
	SiTypescript,
	SiGnubash,
	SiC,
	SiCplusplus,
	SiReact,
	SiNextdotjs,
	SiGatsby,
	SiStreamlit,
	SiRedux,
	SiFramer,
	SiTailwindcss,
	SiMaterialui,
	SiChakraui,
	SiBootstrap,
	SiExpress,
	SiDjango,
	SiFlask,
	SiApollographql,
	SiGraphql,
	SiFastapi,
	SiFirebase,
	SiSupabase,
	SiPostgresql,
	SiMysql,
	SiSqlite,
	SiMongodb,
	SiRedis,
	SiPrisma,
	SiTensorflow,
	SiPytorch,
	SiKeras,
	SiScikitlearn,
	SiOpencv,
	SiDocker,
	SiKubernetes,
	SiJenkins,
	SiTerraform,
	SiAnsible,
	SiGithubactions,
	SiGooglecloud,
	SiAmazonaws,
	SiLatex,
	SiUbuntu,
	SiLinux,
	SiKalilinux,
	SiNumpy,
	SiPandas,
	SiScipy,
	SiJest,
	SiPytest,
	SiHeroku,
	SiNetlify,
	SiVercel,
	SiBabel,
	SiFigma,
	SiCanva,
	SiPostman,
	SiGit,
	SiDigitalocean,
	SiGoland,
	SiHtml5,
	SiCss3,
	SiSass,
	SiNpm,
	SiCodeforces,
	SiLinkedin,
	SiGmail,
	SiGithub,
	SiLeetcode
 } from "react-icons/si"
import {
	BsChevronDoubleDown
} from "react-icons/bs"
import {
	SlCalender
} from "react-icons/sl"

const Home = () => {

	return (
		<div>
			<Head>
				<title>Deepanshu Portfolio</title>
				<meta name="description" content="Portfolio for Deepanshu Jain" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>


			<a id="home"></a>
			<div>
				<div className="pt-16 md:mx-32 md:pt-44">
					<div className="md:flex md:justify-between">
						<div>
							<div className="flex space-x-4 justify-center mb-16 md:flex md:flex-col md:space-y-4 md:items-center md:my-16 md:mx-5">
								<a className="ml-4" href="https://codeforces.com/profile/deepanshu_10">
									<SiCodeforces size={25} />
								</a>
								<a href="https://leetcode.com/deepanshu_10/">
									<SiLeetcode size={25} />
								</a>
								<a href="https://github.com/deepanshu2810">
									<SiGithub size={25} />
								</a>
								{/* <a href="https://twitter.com/dragox2002">
									<FaTwitter size={25} />
								</a> */}
								<a href="https://www.linkedin.com/in/deepanshu2810/">
									<SiLinkedin size={25} />
								</a>
								{/* <a href="https://hashnode.com/@DRAGON2002">
									<SiHashnode size={25} />
								</a> */}
								<a href="mailto:jaindeepu2002@gmail.com">
									<SiGmail size={25} />
								</a>
							</div>
						</div>
						<div className="items-center mx-12 grow flex flex-col md:items-start">
							<h1 className="text-6xl flex items-center font-bold mb-4">
								Deepanshu Jain
							</h1>
							<h1 className="text-2xl mb-4 text-green-400">
								Software Developer
							</h1>
							<p className="mb-12">
								I&apos;m Deepanshu Jain, a software developer
								<br />
								I am a Full Stack Web Developer and a passionate Competitive Programmer.
							</p>
							<a className="bg-green-500 text-white p-4 flex w-36 text-1xl rounded-xl justify-around font-semibold" href="mailto:jaindeepu2002@gmail.com">
								Say Hello
							</a>
						</div>
					</div>
					<div className="">
						<a className="flex justify-center mt-20 space-x-4 items-center" href="#about">
							<BsChevronDoubleDown />
							<div>Scroll down</div>
							<BsChevronDoubleDown />
						</a>
					</div>
				</div>
			</div>


			<a  id="about"></a>
			<div>
				<div className=" pt-28 md:mx-32 md:pt-44 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">About Me</h1>
					<h1 className="text-2xl mb-4 text-green-400">My Introduction</h1>
					<div className="flex flex-col space-y-12 md:space-x-32 justify-center items-center md:items-start md:flex-row">
						<img className="h-72 w-72 rounded-xl" src="DP.jfif" />
						<div className="flex flex-col space-y-20 justify-center items-center grow mx-12 md:items-start">
							<p>
								I&apos;m well versed in the technical domains of ML, Web Development .
								<br />
								I am a Competitive programmer and love coding and solving problems on different coding platforms like Codeforces,Leetcode,Codechef
								<br />
								Feel free to reach out to me in case of any internship or job opportunites as well. Would also be willing to work as a freelancer too.
							</p>
							<a  className="bg-green-500 text-white p-4 flex w-44 text-1xl rounded-xl justify-around font-semibold" download href="https://drive.google.com/file/d/1yCeiLA35iFeoaLe-JTLQvTro520Kgg3p/view?usp=sharing">
								Download CV
							</a>
						</div>
					</div>
				</div>
			</div>


			<a id="skills"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-44 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Skills</h1>
					<h1 className="text-2xl mb-4 text-green-400">My Technical Skills</h1>
					<div className="grid grid-cols-4 md:grid-cols-12 gap-x-8 gap-y-8">
						<SiPython size={50} />
						<SiJavascript size={50} />
						<SiTypescript size={50} />
						<div className={SkillsStyles.tooltip}><SiCplusplus size={50}/><span className={SkillsStyles.tooltiptext}>C++</span></div>
						{/* <SiGoland size={50} /> */}
						<SiC size={50} />
						{/* <SiCplusplus size={50} /> */}
						{/* <SiGnubash size={50} /> */}
						<SiReact size={50} />
						<SiNextdotjs size={50} />
						{/* <SiGatsby size={50} /> */}
						<SiStreamlit size={50} />
						{/* <SiRedux size={50} /> */}
						{/* <SiFramer size={50} /> */}
						<SiHtml5 size={50}/>
						<SiCss3 size={50}/>
						<SiSass size={50}/>
						<SiNpm size={50}/>
						<SiTailwindcss size={50} />
						<SiMaterialui size={50} />
						<SiChakraui size={50} />
						<SiBootstrap size={50} />
						<SiExpress size={50} />
						<SiDjango size={50} />
						{/* <SiFlask size={50} /> */}
						{/* <SiApollographql size={50} /> */}
						{/* <SiGraphql size={50} /> */}
						<FaNodeJs size={50} />
						{/* <SiFastapi size={50} /> */}
						<SiFirebase size={50} />
						{/* <SiSupabase size={50} /> */}
						<SiPostgresql size={50} />
						<SiMysql size={50} />
						<SiSqlite size={50} />
						<SiMongodb size={50} />
						{/* <SiRedis size={50} /> */}
						{/* <SiPrisma size={50} /> */}
						<SiTensorflow size={50} />
						<SiPytorch size={50} />
						<SiKeras size={50} />
						<SiScikitlearn size={50} />
						<SiOpencv size={50} />
						{/* <SiDocker size={50} /> */}
						{/* <SiKubernetes size={50} /> */}
						{/* <SiJenkins size={50} /> */}
						{/* <SiTerraform size={50} /> */}
						{/* <SiAnsible size={50} /> */}
						{/* <SiGithubactions size={50} />	 */}
						<SiGooglecloud size={50} />
						<SiAmazonaws size={50} />
						<SiLatex size={50} />
						<SiUbuntu size={50} />
						<SiLinux size={50} />
						{/* <SiKalilinux size={50} /> */}
						<SiNumpy size={50} />
						<SiPandas size={50} />
						{/* <SiScipy size={50} /> */}
						{/* <SiJest size={50} /> */}
						{/* <SiPytest size={50} /> */}
						<SiHeroku size={50} />
						<SiNetlify size={50} />
						<SiVercel size={50} />
						{/* <SiBabel size={50} /> */}
						<SiFigma size={50} />
						<SiCanva size={50} />
						<SiPostman size={50} />
						<SiGit size={50} />
						{/* <SiDigitalocean size={50} /> */}
						<SiGithub size={50} />
					</div>
				</div>
			</div>


			{/* <a id="experience"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-44 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Experience</h1>
					<h1 className="text-2xl mb-4 text-green-400">My Work So Far</h1>
					<div className="flex flex-col ml-6">
						<div className="flex space-x-8 md:space-x-32 my-8">
							<div className="">
								<div className="inline-block h-16 w-16 rounded-full">
									<img className="h-16 w-16 rounded-full" src="GSOC.png" />
								</div>
								<div className="block w-1 h-full bg-green-400 ml-7"></div>
							</div>
							<div>
								<h1 className="text-2xl mb-4">GSoC Contributor</h1>
								<h1 className="text-2xl mb-4 text-green-400">Intel, Python Software Foundation</h1>
								<div>
									<h1 className="flex space-x-4 items-center"><SlCalender /><div>May 2022 - September 2022</div></h1>
								</div>
							</div>
						</div>	
						<div className="flex space-x-8 md:space-x-32 my-8">
							<div className="">
								<div className="inline-block h-16 w-16 rounded-full">
									<img className="h-16 w-16 rounded-full" src="DIGIPPLUS.jfif" />
								</div>
								<div className="block w-1 h-full bg-green-400 ml-7"></div>
							</div>
							<div>
								<h1 className="text-2xl mb-4">SDE Intern</h1>
								<h1 className="text-2xl mb-4 text-green-400">Digipplus</h1>
								<div>
									<h1 className="flex space-x-4 items-center"><SlCalender /><div>October 2021 - November 2021</div></h1>
								</div>
							</div>
						</div>	
					</div>
				</div>
			</div> */}


			<a id="projects"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-48 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Projects</h1>
					<h1 className="text-2xl mb-4 text-green-400">Things I&apos;ve Created</h1>
					<div className="grid grid-cols-1 gap-y-8">
						<div className="border-double border-4 border-green-500 flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Smart Brain</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
								It can recognise the faces present in the image and also keeps track of them.It is developed using ReactJS for frontend, NodeJS for the backend, PostgreSQL for Database and Clarifai Api is used for retrieving data of face.
							</p>
							<div>
								<a  className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/deepanshu2810/dsmartbrain">View</a>
							</div>
						</div>
						<div className="border-double border-4 border-green-500 flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Color Mania</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
							The game requires you to find correct match for colour in RGB format.A web game developed which offers many interactive options to users such as easy/hard modes. Created using ReactJS and hosted on vercel app
							</p>
							<div>
								<a  className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/deepanshu2810/color-game">View</a>
							</div>
						</div>
						<div className="border-double border-4 border-green-500 flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Portfolio Website</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
								Personal portfolio website. Created using NextJS and hosted on Vercel.
							</p>
							<div>
								<a  className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/deepanshu2810/my-portfolio">View</a>
							</div>
						</div>
					</div>
					<a  className="bg-green-500 text-white p-4 flex w-36 text-1xl rounded-xl justify-around font-semibold mt-12" href="https://github.com/deepanshu2810">View All</a>
				</div>
			</div>


			{/* <a id="blog"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-48 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Blog</h1>
					<h1 className="text-2xl mb-4 text-green-400">Blogs I&apos;ve Written</h1>
					<div className="mx-12">
						I am also an active Technical Blog writer, I try to post blogs every week
						<br />
						I aim to write blogs covering all technical concepts that I know in an extremely beginner friendly manner that even experienced developers could learn somethings from
						<br />
						Feel free to checkout my blog page linked below
					</div>
					<a className="bg-green-500 text-white p-4 flex w-36 text-1xl rounded-xl justify-around font-semibold mt-12" href="https://dragon2002.hashnode.dev">Read Here</a>
				</div>
			</div> */}

			<footer>
				<div className="pt-28 md:mx-32 mb-16 md:pt-48 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4"> Deepanshu Jain</h1>
					<h1 className="text-2xl mb-4 text-green-400">Reach Out</h1>
					<div className="flex space-x-4 items-center my-16 mx-5">
					<a className="ml-4" href="https://codeforces.com/profile/deepanshu_10">
									<SiCodeforces size={25} />
								</a>
								<a href="https://leetcode.com/deepanshu_10/">
									<SiLeetcode size={25} />
								</a>
								<a href="https://github.com/deepanshu2810">
									<SiGithub size={25} />
								</a>
								{/* <a href="https://twitter.com/dragox2002">
									<FaTwitter size={25} />
								</a> */}
								<a href="https://www.linkedin.com/in/deepanshu2810/">
									<SiLinkedin size={25} />
								</a>
								{/* <a href="https://hashnode.com/@DRAGON2002">
									<SiHashnode size={25} />
								</a> */}
								<a href="mailto:jaindeepu2002@gmail.com">
									<SiGmail size={25} />
								</a>
					</div>
					<h1>All rights reserved</h1>
				</div>
			</footer>
		</div>
	)
}

export default Home
