import React from 'react'

const MyToast = ({message='Give some message to toast'}) => {
    const toast = useToast()

  return (
    <Button
    onClick={() =>
      toast({
        position: 'top-right',
        render: () => (
          <Box color='white' rounded={'lg'} p={3} bg='green.500'>
            {message}
          </Box>
        ),
      })
    }
  >
    Show Toast
  </Button>
  )
}

export default MyToast

