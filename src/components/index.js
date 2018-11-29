import contextmenu from '@/components/ContextMenu'
import BasicModal from '@/components/Modal/BasicModal'
import MsgFilter from '@/components/MsgFilter'
import ScrollBar from '@/components/ScrollBar'
import SiderMenu from '@/components/SiderMenu'
import TMap from '@/components/TMap'
import Ueditor from '@/components/Ueditor'
import SearchInput from '@/components/SearchInput'
import BulletBox from '@/components/BulletBox'
import ModalMove from '@/components/ModalMove'
import TabBar from '@/components/Tabs/TabBar'
import TabPanels from '@/components/Tabs/TabPanels'
import TabPanel from '@/components/Tabs/TabPanel'
import FieldEditor from '@/components/FieldEditor'
import Pages from '@/components/Pages'
import TipsModal from '@/components/TipsModal'
import JuhuaLoading from '@/components/Media/JuhuaLoading'
import LoadingModal from '@/components/Media/LoadingModal'
import MessageAudio from '@/components/Media/MessageAudio'
import MessageFile from '@/components/Media/MessageFile'
import MessageVideo from '@/components/Media/MessageVideo'
import PicText from '@/components/PicText'
import FoldPanel from '@/components/FoldPanel'
// 组件
const components = {
  contextmenu,
  BasicModal,
  MsgFilter,
  ScrollBar,
  SiderMenu,
  TMap,
  Ueditor,
  SearchInput,
  BulletBox,
  ModalMove,
  TabBar,
  TabPanels,
  TabPanel,
  FieldEditor,
  Pages,
  TipsModal,
  JuhuaLoading,
  LoadingModal,
  MessageAudio,
  MessageFile,
  MessageVideo,
  PicText,
  FoldPanel
}

const install = Vue => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

// 导出组件
export default {
  install
}
