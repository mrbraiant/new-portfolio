import { MiniDrawer } from '@components/drawer';
import { Section } from '@components/homeSection';
import { Text } from '@components/text';
import { Button, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { BlogCard } from '@components/blog/blogCard';
import { Posts } from '@utils/posts';
import Image from 'next/image';

// type LayoutProps = {};
type inputType = {
  question: string;
};

export const Layout = () => {
  const [gptTextResponse, setGptTextResponse] =
    useState<string>();

  // const gptKey = process.env.CLIENT_KEY;

  const schema = Yup.object().shape({
    question: Yup.string().required(
      'Please write your question',
    ),
  });

  const initialValues = {
    question: '',
  };

  const handleSubmit = async (values: inputType) => {
    try {
      const client = axios.create({
        headers: {
          Authorization:
            'Bearer ' +
            'sk-proj-rIZZh1LOoC26cSAefbdpT3BlbkFJimiPYIXOdV7X058dMHqv',
        },
      });
      console.log('values', values);

      const params = {
        prompt: values.question,
        model: 'gpt-3.5-turbo-instruct',
        max_tokens: 10,
        temperature: 0,
      };

      await client
        .post(
          'https://api.openai.com/v1/completions',
          params,
        )
        .then((result) => {
          console.log('res', result.data.choices[0].text);
          setGptTextResponse(result.data.choices[0].text);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error:', error.message);
      }
    }
  };

  return (
    <>
      {/* TODO: CREATE ONE COMPONENT JUST TO USE AS LAYOUT TO PASS PROPS AS CHILDREN */}
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              width: '100%',
            }}
          >
            <Image
              alt="bot-image"
              src={'/images/bot.png'}
              width={300}
              height={300}
              style={{ borderRadius: '10px' }}
            />

            <Formik
              initialValues={initialValues}
              onSubmit={(values) => handleSubmit(values)}
              validationSchema={schema}
            >
              {({ errors, handleChange }) => (
                <Form>
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      flexDirection: 'column',
                      // width: '100%',
                    }}
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
          </div>
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
            {Posts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                image={post.image}
                title={post.title}
                intro={post.intro}
              />
            ))}
          </div>
        </Section>
      </MiniDrawer>
    </>
  );
};
