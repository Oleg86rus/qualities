import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import qualityService from '../servises/quality.service'
import { toast } from 'react-toastify'
import QualityForm from '../components/ui/qualityForm'
import { useQualities } from '../hooks/useQualities'


const EditQualityPage = () => {
  const id = useParams().id
  const {getQuality, updateQuality} = useQualities()
  const quality = getQuality(id)
  
  const handleSubmit = async (data) => {
    await updateQuality(data)
  }

    return (
        <>
          <h1>Edit Quality Page</h1>
          <QualityForm data={quality} onSubmit={handleSubmit}/>
        </>
    );
};

export default EditQualityPage;
