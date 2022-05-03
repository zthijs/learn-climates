import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Image,
  } from '@chakra-ui/react'


export default function ClimateModal({title, image, children } : {title: string, image : string , children: any}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button textAlign={"left"} mt={2} rightIcon={isOpen ?  <ArrowBackIcon/> : <ArrowForwardIcon />} w={"full"} onClick={onOpen}>{title}</Button>
  
        <Modal scrollBehavior='inside' size={"3xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={10}>
                <Image w={"full"} my={10} borderRadius={"md"} src={image}/>
                {children}
            </ModalBody>
  
          </ModalContent>
        </Modal>
      </>
    )
  }