import { SafeAreaView, Text, View } from 'react-native';
import React, { Component } from 'react';
import ErrorType404 from './error_types/404';
export class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <SafeAreaView style={{ flex: 1 }} >
                    <View style={{ flex: 1 }}>
                        <ErrorType404 />
                    </View>
                </SafeAreaView>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;