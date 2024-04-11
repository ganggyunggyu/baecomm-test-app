export const scrollToBottom = () => {
  const windowHeight = window.innerHeight; // 현재 화면의 높이
  const documentHeight = document.documentElement.scrollHeight; // 문서의 전체 높이
  const maxScrollTop = documentHeight - windowHeight + 200; // 스크롤이 최대로 내려갈 수 있는 위치

  window.scroll({
    top: maxScrollTop,
    left: 0,
    behavior: 'smooth',
  });
};
