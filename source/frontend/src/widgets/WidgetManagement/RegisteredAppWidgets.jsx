import DefaultLayout from "../LayoutWidgets/PageLayouts/DefaultLayout";
import SimpleLayout from "../LayoutWidgets/PageLayouts/SimpleLayout/SimpleLayout";
import AppDrawerDropdown from "../AppWidgets/AppDrawerDropdown";
import ScrollableTabs from "../LayoutWidgets/Tabs/ScrollableTabs";
import Footer from "../LayoutWidgets/Footer";
import SplitMainContent from "../LayoutWidgets/SplitMainContent";
import Configuration from "../AppWidgets/Configuration/Form";
import TimeFrameSelector from "../AppWidgets/TimeFrameSelector/TimeFrameSelector";
import Header from "../LayoutWidgets/Header";
import ColorModeSwitch from "../AppWidgets/Buttons/ColorModeSwitcher";
import AppStore from "../AppWidgets/AppStore/AppStore";
import CurrentPortfolioTable from "../AppWidgets/Tables/CurrentPortfolio";
import TradingConfig from "../AppWidgets/Configuration/TradingConfig";
import ExchangeSelector from "../AppWidgets/ExchangeSelector/ExchangeSelector";
import PairsSelector from "../AppWidgets/PairsSelector/PairsSelector";
import PairsTable from "../AppWidgets/PairsSelector/PairsTable";
import {BacktestingRunDataTable} from "../AppWidgets/Tables/RunDataTableW2UI";
import UIConfig from "../AppWidgets/Configuration/UIConfig";
import StartBacktestingButton from "../AppWidgets/Buttons/StartBacktestingButton";
import StopBacktestingButton from "../AppWidgets/Buttons/StopBacktestingButton";
import OptimizerQueueTable from "../AppWidgets/Tables/OptimizerQueue";
import OptimizerConfigForm from "../AppWidgets/Configuration/OptimizerConfigForm/OptimizerConfigForm";
import OptimizerRunsToBeAdded from "../AppWidgets/Stats/OptimizerRunsToBeAdded";
import StartOptimizerButton from "../AppWidgets/Buttons/StartOptimizerButton";
import StopOptimizerButton from "../AppWidgets/Buttons/StopOptimizerButton";
import AddToOptimizerQueueButton from "../AppWidgets/Buttons/AddToOptimizerQueueButton";
import PageBuilder from "../AppWidgets/PageBuilder/PageBuilder";
import ButtonWithModal from "../AppWidgets/Modals/ButtonWithModal";
import RealTradingSwitch from "../AppWidgets/Configuration/SwitchRealTrading/SwitchRealTrading";
import StopBotButton from "../AppWidgets/Buttons/StopBotButton";
import RestartBotButton from "../AppWidgets/Buttons/RestartBotButton";
import UpdateBotButton from "../AppWidgets/Buttons/UpdateBotButton";
import LiveRunMetaData from "../AppWidgets/Stats/LiveRunData";
import CloseAllPositionsButton from "../AppWidgets/Buttons/CloseAllPositionsButton";
import CancelAllOrdersButton from "../AppWidgets/Buttons/CancelAllOrdersButton";
import PowerMenu from "../AppWidgets/Modals/PowerMenu/PowerMenu";
import SendActionCommandToTradingMode from "../AppWidgets/Buttons/SendActionCommandToTradingMode";
import RefreshBotData from "../AppWidgets/Buttons/RefreshData";
import OptimizerQueueSize from "../AppWidgets/Stats/OptimizerQueueSize";
import ToggleActivateRealTimeStrategy from "../AppWidgets/Buttons/ToggleActivateRealTimeStrategy";
import SymbolsInfoTable from "../AppWidgets/Tables/SymbolsInfo";
import DataTable from "../AppWidgets/Tables/DataTable";
import LogoutButton from "../AppWidgets/Buttons/LogoutButton";
import Sidebar, {SidebarMenuItem} from "../LayoutWidgets/Sidebar/Sidebar";
import TentaclesConfig from "../AppWidgets/Configuration/TentaclesConfig";
import Logo from "../AppWidgets/other/Logo";
import ChartTablePieCombo, {ChartTypeSelector} from "../AppWidgets/Charts/ChartTablePieCombo";
import LanguageSwitch from "../AppWidgets/Buttons/LanguageSwitch";
import ResetConfigs from "../AppWidgets/ResetConfigs/ResetConfigs";
import NotificationCenter from "../AppWidgets/NotificationCenter/NotificationCenter";
import BacktestingProgress from "../AppWidgets/Progress/BacktestingProgress";
import OptimizerProgress from "../AppWidgets/Progress/OptimizerProgress";
import CurrentPanelPosition from "../AppWidgets/Buttons/CurrentPanelPosition";
import DataCollectorProgress from "../AppWidgets/Progress/DataCollectorProgress";
import ClosePairSelector from "../AppWidgets/Buttons/ClosePairSelector";
import SavePairSelector from "../AppWidgets/Buttons/SavePairSelector";
import StraegyConfigurator from "../AppWidgets/Configuration/StrategyConfigurator";
import LoginManager from "../AppWidgets/AppStore/Login";
// import your custom widgets here

export const registeredComponents = {
    // define your custom widget here
    DefaultLayout,
    SimpleLayout,
    Header,
    AppDrawerDropdown,
    LiveRunMetaData,
    ScrollableTabs,
    Footer,
    SplitMainContent,
    RestartBotButton,
    StopBotButton,
    UpdateBotButton,
    StartBacktestingButton,
    StopBacktestingButton,
    StartOptimizerButton,
    StopOptimizerButton,
    Configuration,
    RefreshBotData,
    TimeFrameSelector,
    ColorModeSwitch,
    CurrentPortfolioTable,
    OptimizerQueueSize,
    AppStore,
    TradingConfig,
    PairsSelector,
    BacktestingRunDataTable,
    UIConfig,
    OptimizerQueueTable,
    OptimizerConfigForm,
    OptimizerRunsToBeAdded,
    AddToOptimizerQueueButton,
    PageBuilder,
    ButtonWithModal,
    RealTradingSwitch,
    CloseAllPositionsButton,
    CancelAllOrdersButton,
    PowerMenu,
    SendActionCommandToTradingMode,
    // OptimizerConfigForm2,
    ToggleActivateRealTimeStrategy,
    SymbolsInfoTable,
    DataTable,
    LogoutButton,
    Sidebar,
    SidebarMenuItem,
    NotificationCenter,
    TentaclesConfig,
    Logo,
    ChartTablePieCombo,
    ChartTypeSelector,
    LanguageSwitch,
    ResetConfigs,
    PairsTable,
    ExchangeSelector,
    BacktestingProgress,
    OptimizerProgress,
    CurrentPanelPosition,
    DataCollectorProgress,
    ClosePairSelector,
    SavePairSelector,
    StraegyConfigurator,
    LoginManager
};
