import React from "react";
import { StyleSheet, View, Text } from "react-native";
import RNModal from "react-native-modal";
type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  [x: string]: any;
};
export const Modal = ({
  isVisible = false,
  children,
  ...props
}: ModalProps) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}>
      {children}
    </RNModal>
  );
};

const ModalContainer1 = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.container1}>{children}</View>
);
const ModalContainer2 = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.container2}>{children}</View>
);

const ModalFrame = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.frame}>{children}</View>
);

const ModalHeader = ({ title }: { title: string }) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const ModalBody = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.body}>{children}</View>
);

const ModalFooter = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.footer}>{children}</View>
);

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "#E96232",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  container2: {
    backgroundColor: "#ffe8ba",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  frame: {
    margin: '1.5%',
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "white",
    borderStyle: "solid",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 24,
  },
  body: {
    justifyContent: "center",
    paddingHorizontal: 15,
    minHeight: 100,
  },
  footer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
  },
});

Modal.Header = ModalHeader;
Modal.Frame = ModalFrame;
Modal.Container1 = ModalContainer1;
Modal.Container2 = ModalContainer2;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
