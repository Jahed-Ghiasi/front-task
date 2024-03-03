import { useCallback, useState } from "react";
import Modal from "src/app/components/common/modal";
import { useAppContext } from "src/app/utils/context";
import "./styles.css";
import clsx from "clsx";
import { Form, Formik } from "formik";
import Button from "src/app/components/common/Button";
import * as Yup from "yup";
import RadioField from "src/app/components/common/RadioField";
import { BiSolidConversation } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import FormStagePresenter from "src/app/components/common/FormStagePresenter";
import InputField from "src/app/components/common/InputField";
import { dateString } from "src/app/utils/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IInit {
  email: string;
  date: number;
  course: number;
}
type TStage = { title: stage_title; description: string };
enum stage_title {
  email = "Email",
  course = "Course",
  preview = "Preview",
}

const stages: TStage[] = [
  {
    title: stage_title.email,
    description: "Set Date",
  },
  {
    title: stage_title.course,
    description: "Select Course",
  },
  {
    title: stage_title.preview,
    description: "Preview Detail",
  },
];

const dateOptions = [
  {
    id: 1,
    icon: <BiSolidConversation />,
    value: 1709182172746,
  },
  {
    id: 2,
    icon: <BiSolidConversation />,
    value: 1709185772746,
  },
  {
    id: 3,
    icon: <BiSolidConversation />,
    value: 1709189372746,
  },
];

const courseOptions = [
  {
    id: 1,
    icon: <TbTargetArrow />,
    title: "Financial",
    teacher: "Ehsan Ebrahimi",
  },
  {
    id: 2,
    icon: <TbTargetArrow />,
    title: "Accounting",
    teacher: "Sajjad Tahami",
  },
  {
    id: 3,
    icon: <TbTargetArrow />,
    title: "Accounting Tax",
    teacher: "Mehrdad Moradpour",
  },
];

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Enter your email address!")
    .email("Email format not valid"),
  date: Yup.number().required("Select date!"),
});

const AddMeetingModal = () => {
  const { isAddMeetingModal, setIsAddMeetingModal } = useAppContext();
  const [stageTitle, setStageTitle] = useState<stage_title>(stage_title.email);

  const initialValues: IInit = {
    email: "",
    date: 0,
    course: 0,
  };

  const goBack = useCallback(() => {
    switch (stageTitle) {
      case stage_title.preview:
        setStageTitle(stage_title.course);
        break;
      case stage_title.course:
        setStageTitle(stage_title.email);
        break;
    }
  }, [stageTitle]);

  const handleContinue = useCallback(
    (
      handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
    ) => {
      switch (stageTitle) {
        case stage_title.email:
          setStageTitle(stage_title.course);
          break;
        case stage_title.course:
          setStageTitle(stage_title.preview);
          break;
        case stage_title.preview:
          handleSubmit();
          break;
      }
    },
    [stageTitle]
  );

  const getSelectedCoursePreview = useCallback((course: number) => {
    const selectedCourse = courseOptions.find((c: any) => course === c.id);
    return selectedCourse
      ? `${selectedCourse.title} - ${selectedCourse.teacher}`
      : "";
  }, []);

  return (
    <Modal
      backdrop
      visible={isAddMeetingModal}
      onHiding={() => setIsAddMeetingModal(false)}
      width={800}
    >
      <div className="container">
        <FormStagePresenter stages={stages} activeStage={stageTitle} />
        <div className="stage-form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: any) => {
              toast.success("Meeting Successfuly Created", {});
              setIsAddMeetingModal(false);
              setStageTitle(stage_title.email);
            }}
          >
            {({ values, touched, errors, handleSubmit, setFieldValue }) => (
              <Form>
                <div className="form">
                  <div>
                    {stageTitle === stage_title.email ? (
                      <div className="fields">
                        <InputField
                          inputClassName="formInput"
                          label="Email"
                          required
                          id="email"
                          name="email"
                          value={values.email}
                          errors={errors}
                          touched={touched}
                          onChange={(value: string) =>
                            setFieldValue("email", value)
                          }
                        />
                        <div className="">
                          <label className="vital-input">Date</label>
                          {dateOptions.map((option: any) => {
                            return (
                              <RadioField
                                key={option.id}
                                icon={option.icon}
                                selected={values.date}
                                title={<span>{dateString(option.value)}</span>}
                                value={option.value}
                                onChange={(value: number) =>
                                  setFieldValue("date", value)
                                }
                              />
                            );
                          })}
                          {errors.date && touched.date ? (
                            <span className="error">
                              {(errors as any).date}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                    {stageTitle === stage_title.course ? (
                      <div className="fields">
                        <div className="">
                          <label className="vital-input">Course</label>
                          {courseOptions.map((option: any) => {
                            return (
                              <RadioField
                                key={option.id}
                                icon={option.icon}
                                selected={values.course}
                                title={
                                  <div className="course-title">
                                    <span className="up">{option.title}</span>
                                    <span className="down">
                                      {option.teacher}
                                    </span>
                                  </div>
                                }
                                value={option.id}
                                onChange={(value: number) =>
                                  setFieldValue("course", value)
                                }
                              />
                            );
                          })}
                          {errors.course && touched.course ? (
                            <span className="error">
                              {(errors as any).course}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                    {stageTitle === stage_title.preview ? (
                      <div className="fields preview">
                        <div className="preview-item">
                          <span className="key">Email: </span>
                          <span className="value">{values.email}</span>
                        </div>
                        <div className="preview-item">
                          <span className="key">Date: </span>
                          <span className="value">
                            {values.date ? dateString(values.date) : null}
                          </span>
                        </div>
                        <div className="preview-item">
                          <span className="key">Course: </span>
                          <span className="value">
                            {getSelectedCoursePreview(values.course)}
                          </span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div
                    className={clsx(
                      "btns",
                      stageTitle === stage_title.email && "ended-btns"
                    )}
                  >
                    {stageTitle !== stage_title.email ? (
                      <Button
                        className="back"
                        type="outlined"
                        text="Back"
                        onClick={goBack}
                      />
                    ) : null}
                    <Button
                      className="continue"
                      type="contained"
                      text={
                        stageTitle === stage_title.preview
                          ? "Complete"
                          : "Continue"
                      }
                      onClick={() => handleContinue(handleSubmit)}
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default AddMeetingModal;
