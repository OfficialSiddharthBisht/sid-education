import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const DrawerData = [
    {
        url: "/",
        title: "Home"
    },
    {
        url: "/courses",
        title: "All Courses"
    },
    {
        url: "/request",
        title: "Request A Course"
    },
    {
        url: "/contact",
        title: "Contact Us"
    },
    {
        url: "/about",
        title: "About Us"
    }
]

const DrawerButtons = ({ url = "/", title = "Title Drawer BTN", colorS, vrnt }) => {
    return (
        <Link to={url}>
            <Button variant={'ghost'} colorScheme={colorS} varient={`${vrnt}`}>{title}</Button>
        </Link>
    )
}

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isAuthenticated = true;
    const user = {
        role: 'admin',
    }
    const logoutHandler = () => {
        console.log("Logged Out");
    }
    return (
        <>
            <ColorModeSwitcher />
            <Button
                onClick={onOpen}
                colorScheme={'yellow'}
                width="12"
                height={"12"}
                rounded="full"
                position={'fixed'}
                top='6'
                left='6'
            >
                <RiMenu5Fill />
            </Button>
            <Drawer
                placement='left'
                isOpen={isOpen}
                onClose={onClose}
            >
                <DrawerOverlay backdropFilter={'blur(2px)'} />
                <DrawerContent>
                    <DrawerHeader
                        borderBottomWidth={'2px'}
                    >Sid Ed. Hub</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={"5"} alignItems={'flex-start'}>
                            {
                                DrawerData.map((el, index) => (
                                    <DrawerButtons id={index} url={el.url} title={el.title} />
                                ))
                            }
                            <HStack
                                justifyContent={'space-evenly'}
                                position={'absolute'}
                                bottom={'2rem'}
                                width={'80%'}
                            >
                                {isAuthenticated ?
                                    (<>
                                        <VStack>
                                            <HStack>
                                                <DrawerButtons url='/profile' title='Profile' vrnt='ghost' />
                                                <Link>
                                                    <Button variant={'ghost'} onClick={logoutHandler}>
                                                        <RiLogoutBoxLine />
                                                        Logout
                                                    </Button>
                                                </Link>
                                            </HStack>
                                            {
                                                user && user.role === 'admin' && (
                                                    <Link to="/admin/dashboard">
                                                        <Button colorScheme={'purple'} varient={"ghost"}>
                                                            <RiDashboardFill style={{ margin: '4px' }} />
                                                            Admin Dashboard
                                                        </Button>
                                                    </Link>
                                                )
                                            }
                                        </VStack>
                                    </>)
                                    :
                                    (<>
                                        <DrawerButtons url='/login' title='Login' colorS='yellow' />
                                        <p>OR</p>
                                        <DrawerButtons url='/register' title='Register' colorS='yellow' />
                                    </>)}
                            </HStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default Header

