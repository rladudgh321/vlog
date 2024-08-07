export default function ContentComponent() {
  return (
    <div className="max-w-[768px] text-left mx-auto my-10 text-2xl">
      들어가며#
웹 사이트나 모바일 애플리케이션 등 다양한 곳에서 아이콘이 사용됩니다. 보통 인터넷에 공개되어 있는 아이콘을 사용할 수도 있고, 어느 정도 규모가 있는 회사나 자신만의 색을 가지거나 혹은 특정 도메인에 특화된 애플리케이션이라면 아이콘을 직접 관리해야 할 수도 있습니다.

아이콘을 관리한다는 것은 무엇일까요?

우선 아이콘을 디자인해 주시는 디자이너가 계실 겁니다. 디자인이 끝나면 개발단에 적용해야 합니다. 디자이너분이 svg 혹은 png로 이미지를 내보내서 개발자분께 전달할 수도 있습니다. 혹은 피그마나 다른 프로토타입 툴을 사용한다면 개발자가 직접 에셋을 export 해서 사용할 수도 있습니다.

한 화면에서 사용되는 아이콘이 많다면 이런 과정이 생각보다 시간이 오래 걸리고, 아이콘 디자인이 수정되기라도 하면 해당 아이콘을 사용하는 모든 화면을 찾아 적용해야 합니다.

그래서 보통은 디자인시스템팀이 있어서 이런 에셋을 관리한다던가, 혹은 아이콘을 관리하는 오너십을 가진 사람이 있어야 합니다. 하지만 많은 회사가 디자인시스템팀을 가진 것은 아니고, 누군가가 관리를 한다 해도 정말 쉽지 않은 일입니다.

이 글은 제가 당근마켓에서 디자인시스템 프론트엔드 개발자로 있으면서 어떤 식으로 아이콘을 관리하는지 어떤 식으로 피그마와 깃허브의 Sync를 맞추는지에 대한 글입니다.

그리고 더 나아가 사내에서만 쓰이는 툴로 만든 것이 아닌, 오픈소스로 공개해서 다른 팀이나 회사에서 피그마로 아이콘을 관리한다면 빠르게 깃허브로 배포할 수 있는 피그마를 만든 이야기까지 포함합니다
    </div>
  );
}