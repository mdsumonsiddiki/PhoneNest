import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";
import UseAuth from "../hook/UseAuth";
import toast from "react-hot-toast";

const SingUp = () => {
    const { createUserWithEmailPass, userProfileUpdate, setLoading } = UseAuth()
    const navigate = useNavigate();


    const handleSingUp = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        try {
            setLoading(true)
            await createUserWithEmailPass(email, password)
            await userProfileUpdate(name)
            toast.success('Signup Successful')
            setLoading(false)
            navigate('/')

        } catch (err) {
            toast.error(err.message)
            setLoading(false)
        }

    }


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-spaceCadet">
                    Create Account
                </h2>
            </div>
            <div className="mt-4">
                <GoogleLogin />
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSingUp} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium leading-6 text-spaceCadet">
                            Full Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="name"
                                required
                                className="block w-full px-3 rounded-md border-0 py-1.5 text-spaceCadet shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium leading-6 text-spaceCadet">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block px-3 w-full rounded-md border-0 py-1.5 text-spaceCadet shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-lg font-medium leading-6 text-spaceCadet">
                                Password
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block px-3 w-full rounded-md border-0 py-1.5 text-spaceCadet shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-orange px-3 py-2 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-orange/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orbg-orange"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-spaceCadet">
                    Already Registered User?{' '}
                    <Link to='/singin' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">SingIn</Link>
                </p>
            </div>
        </div>
    );
};

export default SingUp;