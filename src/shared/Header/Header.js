import React, {useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/Firebase.init';
import { signOut } from 'firebase/auth';
import Spinner from "../../components/Spinner/Spinner";
import { toast } from "react-toastify";


const Header = () => {
	const [open, setOpen] = useState(false);

	const [user, loading, error] = useAuthState(auth);

	if(loading){
		return <Spinner/>
	}

	if(error){
		return toast.error(error?.message, {
			position: toast.POSITION.TOP_CENTER,
			toastId: 5
		});
	}

	return (
		<header  className=" py-3 shadow z-10 bg-white sticky top-0">
			<div className="mx-auto md:w-5/6 w-6/6 px-3 md:px-0">
				<nav className="flex items-center justify-between relative">

					<Link className="inline-block text-3xl font-medium" to="">
						Picman
					</Link>
					<ul
						className={`text-center rounded lg:py-0 bg-[#fff] lg:bg-inherit w-full lg:w-auto absolute duration-200 lg:static left-0 lg:flex lg:items-center lg:space-x-6 overflow-hidden ${
							open ? "left-0 shadow pb-3 top-[3.05rem]" : "left-[-1000px] top-[3.05rem]"
						}`}
					>
						<li>
							<NavLink className={({isActive}) => (isActive ? "py-2 block lg:inline lg:hover:bg-inherit lg:bg-inherit bg-[#274035] lg:text-[#274035] text-white " : " py-2 block lg:inline lg:hover:text-[#000] hover:bg-[#81ccac33] lg:hover:bg-inherit text-[#0000007a] ")}
							
								to={"/"}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink className={({isActive}) => (isActive ? "py-2 block lg:inline lg:hover:bg-inherit lg:bg-inherit bg-[#274035] lg:text-[#274035] text-white " : " py-2 block lg:inline lg:hover:text-[#000] hover:bg-[#81ccac33] lg:hover:bg-inherit text-[#0000007a] ")}
							
								to={"/services"}
							>
								Services
							</NavLink>
						</li>
						
						<li>
							<NavLink className={({isActive}) => (isActive ? "py-2 block lg:inline lg:hover:bg-inherit lg:bg-inherit bg-[#274035] lg:text-[#274035] text-white" : " py-2 block lg:inline lg:hover:text-[#000] hover:bg-[#81ccac33] lg:hover:bg-inherit text-[#0000007a]")}
								
								to={"/blogs"}
							>
								Blogs
							</NavLink>
						</li>
						<li>
							<NavLink className={({isActive}) => (isActive ? "py-2 block lg:inline lg:hover:bg-inherit lg:bg-inherit bg-[#274035] lg:text-[#274035] text-white" : " py-2 block lg:inline lg:hover:text-[#000] hover:bg-[#81ccac33] lg:hover:bg-inherit text-[#0000007a]")}
								
								to={"/about"}
							>
								About
							</NavLink>
						</li>
						{
							
							user?.displayName ? <li>
								<h3 className="font-semibold py2">{user.displayName}</h3>
							</li>
								 : <li><h3 className="font-semibold py-2" >User</h3></li>
							
						}

						{
							user?.photoURL ? <li>
									<div className="py-2 lg:inline">
										<img className="w-10 mx-auto h-10 rounded-full" src={user.photoURL} alt="" />
									</div>
							</li> : 
							<li>
								<div>
									<HiUserCircle className="text-[#274035] w-10 mx-auto h-10 rounded-full"/>
								</div>
							</li>
						}
					</ul>

                    {
						user ? <div className="flex items-center space-x-3">
									<button onClick={() => signOut(auth)} className="btn">Signout</button>
							  </div> 
						: <div>
							<Link className="btn py-2 block lg:inline "to={"/signin"}>Signin</Link>
						</div>
					}

					<button onClick={() => setOpen(!open)} className="lg:hidden text-3xl">
						{open ? <HiOutlineX /> : <HiMenu />}
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
