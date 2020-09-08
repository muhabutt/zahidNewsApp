//import libraries
import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
} from 'react-native';
import styles from '../styles/mainCss';
import SubCategories from '../jsonFiles/SubCategories';
import DropDown from '../components/DropDown';

// create a component
const Menu = (props) => {
	const {
		countryCode,
		getNews,
		setVisible,
		category
	} = props;

	const getCategories = () => {
		let cat = SubCategories.categories;
		return cat.map((item, key) => (
			<TouchableOpacity
				key={key}
				onPress={() => {
					getNews(countryCode, item.name);
					setVisible(false);
				}}>
				<Text style={[styles.article_anchor, category === item.name ? styles.blue: styles.white ]}>
					{item.name.toUpperCase()}
				</Text>
			</TouchableOpacity>
		));
	};

	return (
		<View style={[styles.grayBackground, styles.flex1]}>
			<DropDown
				countryCode={countryCode}
				getNews={getNews}
				setVisible={setVisible}
			/>
			<SafeAreaView style={[styles.flex1, styles.pl15, styles.pr15]}>
				<ScrollView>{getCategories()}</ScrollView>
			</SafeAreaView>
		</View>
	);
};

Menu.propTypes = {
	setVisible: PropTypes.func.isRequired,
	countryCode: PropTypes.string,
	getNews: PropTypes.func.isRequired,
	category: PropTypes.string
};

const areEqual = (prevProps, nextProps) => {
	return (
		prevProps.category === nextProps.category
	);
};
const menu = memo(Menu, areEqual);

export default menu;
