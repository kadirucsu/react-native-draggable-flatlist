import React from "react";
import { VirtualizedListProps, ViewStyle, FlatList as RNFlatList } from "react-native";
import Animated from "react-native-reanimated";
declare const defaultProps: {
    autoscrollThreshold: number;
    autoscrollSpeed: number;
    animationConfig: any;
    scrollEnabled: boolean;
    activationDistance: number;
};
declare type DefaultProps = Readonly<typeof defaultProps>;
declare type AnimatedFlatListType<T> = {
    getNode: () => RNFlatList<T>;
};
export declare type DragEndParams<T> = {
    data: T[];
    from: number;
    to: number;
};
export declare type RenderItemParams<T> = {
    item: T;
    index?: number;
    drag: () => void;
    isActive: boolean;
};
declare type Modify<T, R> = Omit<T, keyof R> & R;
declare type Props<T> = Modify<VirtualizedListProps<T>, {
    autoscrollSpeed?: number;
    autoscrollThreshold?: number;
    data: T[];
    onRef?: (ref: React.RefObject<AnimatedFlatListType<T>>) => void;
    onDragBegin?: (index: number) => void;
    onRelease?: (index: number) => void;
    onDragEnd?: (params: DragEndParams<T>) => void;
    renderItem: (params: RenderItemParams<T>) => React.ReactNode;
    animationConfig: Partial<Animated.SpringConfig>;
    activationDistance?: number;
    debug?: boolean;
    layoutInvalidationKey?: string;
} & Partial<DefaultProps>>;
declare type State = {
    activeKey: string | null;
    hoverComponent: React.ReactNode | null;
};
declare type CellData = {
    size: Animated.Value<number>;
    offset: Animated.Value<number>;
    measurements: {
        size: number;
        offset: number;
    };
    style: Animated.AnimateProps<ViewStyle, {}>;
    currentIndex: Animated.Value<number>;
    onLayout: () => void;
    onUnmount: () => void;
};
declare class DraggableFlatList<T> extends React.Component<Props<T>, State> {
    state: State;
    containerRef: any;
    flatlistRef: any;
    panGestureHandlerRef: any;
    containerSize: any;
    activationDistance: any;
    touchAbsolute: any;
    touchCellOffset: any;
    panGestureState: any;
    isPressedIn: {
        native: any;
        js: boolean;
    };
    hasMoved: any;
    disabled: any;
    activeIndex: any;
    isHovering: any;
    spacerIndex: any;
    activeCellSize: any;
    scrollOffset: any;
    scrollViewSize: any;
    isScrolledUp: any;
    isScrolledDown: any;
    hoverAnim: any;
    hoverMid: any;
    hoverOffset: any;
    hoverTo: any;
    hoverClock: any;
    hoverAnimState: {
        finished: any;
        velocity: any;
        position: any;
        time: any;
    };
    hoverAnimConfig: any;
    distToTopEdge: any;
    distToBottomEdge: any;
    cellAnim: Map<string, {
        config: any;
        state: any;
        clock: any;
    }>;
    cellData: Map<string, CellData>;
    cellRefs: Map<string, any>;
    moveEndParams: any[];
    resetHoverSpring: any[];
    keyToIndex: Map<string, number>;
    isAutoscrolling: {
        native: any;
        js: boolean;
    };
    queue: (() => void | Promise<void>)[];
    static getDerivedStateFromProps(props: Props<any>): {
        extraData: any;
    };
    static defaultProps: {
        autoscrollThreshold: number;
        autoscrollSpeed: number;
        animationConfig: any;
        scrollEnabled: boolean;
        activationDistance: number;
    };
    constructor(props: Props<T>);
    dataHasChanged: (a: T[], b: T[]) => boolean;
    componentDidUpdate: (prevProps: Modify<any, {
        autoscrollSpeed?: number | undefined;
        autoscrollThreshold?: number | undefined;
        data: T[];
        onRef?: ((ref: any) => void) | undefined;
        onDragBegin?: ((index: number) => void) | undefined;
        onRelease?: ((index: number) => void) | undefined;
        onDragEnd?: ((params: DragEndParams<T>) => void) | undefined;
        renderItem: (params: RenderItemParams<T>) => any;
        animationConfig: any;
        activationDistance?: number | undefined;
        debug?: boolean | undefined;
        layoutInvalidationKey?: string | undefined;
    } & Partial<Readonly<{
        autoscrollThreshold: number;
        autoscrollSpeed: number;
        animationConfig: any;
        scrollEnabled: boolean;
        activationDistance: number;
    }>>>, prevState: State) => Promise<void>;
    flushQueue: () => Promise<void>;
    resetHoverState: () => void;
    drag: (hoverComponent: any, activeKey: string) => void;
    onRelease: ([index]: readonly number[]) => void;
    onDragEnd: ([from, to]: readonly number[]) => void;
    updateCellData: (data?: T[]) => void;
    setCellData: (key: string, index: number) => void;
    measureAll: (data: T[]) => void;
    measureCell: (key: string) => Promise<void>;
    keyExtractor: (item: T, index: number) => any;
    onContainerLayout: () => void;
    onListContentSizeChange: (w: number, h: number) => void;
    targetScrollOffset: any;
    resolveAutoscroll?: (scrollParams: readonly number[]) => void;
    onAutoscrollComplete: (params: readonly number[]) => void;
    scrollToAsync: (offset: number) => Promise<readonly number[]>;
    getScrollTargetOffset: (distFromTop: number, distFromBottom: number, scrollOffset: number, isScrolledUp: boolean, isScrolledDown: boolean) => number;
    autoscroll: ([distFromTop, distFromBottom, scrollOffset, isScrolledUp, isScrolledDown]: readonly number[]) => Promise<void>;
    isAtTopEdge: any;
    isAtBottomEdge: any;
    isAtEdge: any;
    autoscrollParams: any[];
    checkAutoscroll: any;
    onScroll: any;
    onGestureRelease: any[];
    onPanStateChange: any;
    onPanGestureEvent: any;
    hoverComponentTranslate: any;
    hoverComponentOpacity: any;
    renderHoverComponent: () => any;
    renderItem: ({ item, index }: {
        item: T;
        index: number;
    }) => any;
    CellRendererComponent: (cellProps: any) => any;
    renderDebug(): any;
    render(): any;
}
export default DraggableFlatList;
