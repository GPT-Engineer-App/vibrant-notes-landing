import { Box, Button, Container, Flex, Heading, IconButton, Input, SimpleGrid, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaPlus, FaSearch } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBgColor = useColorModeValue("white", "gray.700");
  const accentColor = "blue.500";
  const hoverBgColor = "blue.600";

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" bg={bgColor} minH="100vh">
        {/* Navigation Bar */}
        <Flex w="full" bg="white" p={4} shadow="md" align="center" justify="space-between">
          <Heading size="md" color={accentColor}>
            NoteKeeper
          </Heading>
          <Flex>
            <Input placeholder="Search notes" size="md" mr={2} />
            <IconButton aria-label="Search" icon={<FaSearch />} />
          </Flex>
        </Flex>

        {/* Main Content */}
        <VStack spacing={8} w="full" p={8} align="stretch">
          <Button leftIcon={<FaPlus />} colorScheme="blue" variant="solid">
            Add New Note
          </Button>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {/* Dynamic Note Cards */}
            {Array.from({ length: 6 }).map((_, index) => (
              <Box key={index} p={5} shadow="md" bg={cardBgColor} borderRadius="md">
                <Heading size="md" mb={4}>
                  Note Title {index + 1}
                </Heading>
                <Text fontSize="sm" mb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Button colorScheme="blue" variant="outline" size="sm">
                  Edit
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
