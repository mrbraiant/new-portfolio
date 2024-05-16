import { MiniDrawer } from '@components/drawer';
import { Section } from '@components/homeSection';
import { Text } from '@components/text';
import { Button, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { BlogCard } from '@components/blog/blogCard';

// type LayoutProps = {};
type inputType = {
  question: string;
};

export const Layout = () => {
  const [gptTextResponse, setGptTextResponse] =
    useState<string>();

  const gptKey = process.env.CLIENT_KEY;

  const schema = Yup.object().shape({
    question: Yup.string().required(
      'Please write your question',
    ),
  });

  const initialValues = {
    question: '',
  };

  const handleSubmit = async (values: inputType) => {
    console.log('values', values);

    const client = axios.create({
      headers: {
        Authorization: 'Bearer ' + gptKey,
      },
    });

    const params = {
      prompt: values.question,
      model: 'gpt-3.5-turbo-instruct',
      max_tokens: 10,
      temperature: 0,
    };

    await client
      .post('https://api.openai.com/v1/completions', params)
      .then((result) => {
        console.log('res', result.data.choices[0].text);
        setGptTextResponse(result.data.choices[0].text);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <MiniDrawer>
        <Section sectionName="About" />

        <Section
          sectionName="Experience"
          titleBackgroundColor="#24394C"
        />

        <Section
          sectionName="Projects"
          titleBackgroundColor="#485A6A"
        />

        <Section
          sectionName="Skills"
          titleBackgroundColor="#6D7B88"
        />

        <Section
          sectionName="Education"
          titleBackgroundColor="#919CA5"
        />

        <Section
          sectionName="Contact"
          titleBackgroundColor="#6D7B88"
        >
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={schema}
          >
            {({ errors, handleChange }) => (
              <Form>
                <div
                  style={{ display: 'flex', gap: '1rem' }}
                >
                  <TextField
                    id="question"
                    name="question"
                    label="Write your question to my A.I."
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    defaultValue={initialValues.question}
                    error={Boolean(errors.question)}
                    size="small"
                    multiline
                    rows={2}
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                  >
                    Ask
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
          <Text type="h6">
            <strong>Answer: </strong>
          </Text>
          <Text type="body1">{gptTextResponse}</Text>
        </Section>

        <Section
          sectionName="Blog"
          titleBackgroundColor="#485A6A"
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <BlogCard
              title="Experiences"
              intro="Nostrud minim aliquip sint aliqua. Voluptate irure do duis excepteur ullamco sunt ipsum commodo sunt excepteur. Anim magna est deserunt velit voluptate excepteur voluptate aliqua pariatur in velit duis anim aliquip. Do ex cupidatat sint sint aute enim aute velit est laboris. Anim ad labore ut cillum dolor et ullamco occaecat occaecat esse non."
            />
            <BlogCard
              title="Development"
              intro="Nostrud minim aliquip sint aliqua. Voluptate irure do duis excepteur ullamco sunt ipsum commodo sunt excepteur. Anim magna est deserunt velit voluptate excepteur voluptate aliqua pariatur in velit duis anim aliquip. Do ex cupidatat sint sint aute enim aute velit est laboris. Anim ad labore ut cillum dolor et ullamco occaecat occaecat esse non."
            />
            <BlogCard
              title="Studies"
              intro="Nostrud minim aliquip sint aliqua. Voluptate irure do duis excepteur ullamco sunt ipsum commodo sunt excepteur. Anim magna est deserunt velit voluptate excepteur voluptate aliqua pariatur in velit duis anim aliquip. Do ex cupidatat sint sint aute enim aute velit est laboris. Anim ad labore ut cillum dolor et ullamco occaecat occaecat esse non."
            />
            <BlogCard
              title="AI Development"
              intro="Nostrud minim aliquip sint aliqua. Voluptate irure do duis excepteur ullamco sunt ipsum commodo sunt excepteur. Anim magna est deserunt velit voluptate excepteur voluptate aliqua pariatur in velit duis anim aliquip. Do ex cupidatat sint sint aute enim aute velit est laboris. Anim ad labore ut cillum dolor et ullamco occaecat occaecat esse non."
            />
            <BlogCard
              title="AI Development"
              intro="Nostrud minim aliquip sint aliqua. Voluptate irure do duis excepteur ullamco sunt ipsum commodo sunt excepteur. Anim magna est deserunt velit voluptate excepteur voluptate aliqua pariatur in velit duis anim aliquip. Do ex cupidatat sint sint aute enim aute velit est laboris. Anim ad labore ut cillum dolor et ullamco occaecat occaecat esse non."
            />
            <BlogCard
              title="AI Development"
              intro="Nostrud minim aliquip sint aliqua. Voluptate irure do duis excepteur ullamco sunt ipsum commodo sunt excepteur. Anim magna est deserunt velit voluptate excepteur voluptate aliqua pariatur in velit duis anim aliquip. Do ex cupidatat sint sint aute enim aute velit est laboris. Anim ad labore ut cillum dolor et ullamco occaecat occaecat esse non."
            />
          </div>
        </Section>
      </MiniDrawer>
    </>
  );
};
