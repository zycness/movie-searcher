import { Button, Center, Title } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/error.module.css";

const ErrorPage = () => {
  return (
    <Center>
      <div className={styles.errorPageContainer}>
        <Title className={styles.errorTitle} order={2} align="center">
          Ha ocurrido un error vuelva al inicio
        </Title>
        <Button component={Link} to="/">
          Volver al inicio
        </Button>
      </div>
    </Center>
  );
};

export default ErrorPage;
