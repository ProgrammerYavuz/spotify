import { Menu } from '@headlessui/react'
import { Icon } from 'Icons'


function Auth() {

    const user = {
        name: 'Elon Musk',
        avatar: 'https://bigthink.com/wp-content/uploads/2021/05/3853-136116.jpg?w=512&h=512&crop=1'
    }

    return (
        <Menu as="nav" className={"relative"}>
            {({open}) => (
                <>
                    <Menu.Button className={`flex items-center h-8 pr-2 rounded-3xl ${open ? 'bg-active': 'bg-black'} hover:bg-active`}>
                        <img src={user.avatar} className={"w-8 h-8 rounded-full p-px mr-2"} alt=""/>
                        <span className={"text-sm font-semibold mr-2"}>{user.name}</span>
                        <span className={`duration-500 ${open === true && 'rotate-180'}`}>
                            <Icon name="downDir" size={16} />
                        </span>
                    </Menu.Button>
                    <Menu.Items className={"absolute top-full right-0 w-50 p-1 bg-active rounded translate-y-2"}>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`flex h-10 items-center justify-between px-2 text-sm font-semibold rounded ${active && 'bg-white bg-opacity-10'}`}
                                href="/"
                                >
                                Account
                                <Icon name="external" size={16} />
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`flex h-10 items-center px-2 text-sm font-semibold rounded ${active && 'bg-white bg-opacity-10'}`}
                                href="/"
                                >
                                Profile
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`flex h-10 items-center px-2 text-sm font-semibold rounded ${active && 'bg-white bg-opacity-10'}`}
                                href="/"
                                >
                                Log Out
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}

export default Auth