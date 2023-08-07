import { Heading } from "@chakra-ui/react";

export const SectionTitle = ({ children }) => (
  <Heading
    mb={2}
    py={2}
    borderBottom="1px"
    borderColor="gray.200"
    as="h2"
    size="md">
    {children}
  </Heading>
);
