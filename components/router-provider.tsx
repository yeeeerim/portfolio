"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp("(?:^|; )" + name + "=([^;]*)"),
  );

  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const RouterProvider = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, onOpenChange] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  useEffect(() => {
    // ✅ 현재 경로를 `sessionStorage`와 `cookie`에 저장
    sessionStorage.setItem("previousPath", pathname);
    document.cookie = `previousPath=${pathname}; path=/; max-age=60`;
  }, [pathname]);

  useEffect(() => {
    const alertType = getCookie("alert");

    if (alertType === "underConstruction") {
      onOpenChange(true);
      setModalContent({
        title: "접근 제한",
        body: "준비중인 페이지입니다.",
      });
    }

    // ✅ 알림이 표시된 후 쿠키 삭제
    document.cookie = "alert=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }, []);

  // ✅ 모달 닫힐 때 이전 페이지로 이동
  const handleClose = () => {
    const previousPath =
      sessionStorage.getItem("previousPath") ||
      getCookie("previousPath") ||
      "/";

    router.replace(previousPath);
    onOpenChange(false);
  };

  return (
    <Modal isOpen={isOpen} placement={"center"} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          {modalContent.title}
        </ModalHeader>
        <ModalBody>
          <p>{modalContent.body}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={handleClose}>
            확인
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RouterProvider;
