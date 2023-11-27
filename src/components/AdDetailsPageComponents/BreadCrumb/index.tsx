import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <Breadcrumb
      backgroundColor={"#E53E3E"}
      spacing="8px"
      fontWeight="bold"
      fontSize="sm"
      separator=">"
      color={"white"}
      p={5}
      borderRadius={"5px"}
    >
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>Annonce</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrumb;
