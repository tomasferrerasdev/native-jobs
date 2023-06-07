import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { checkImageURL } from '../../../../utils';
import styles from './nearbyjobcard.style';

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png',
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
