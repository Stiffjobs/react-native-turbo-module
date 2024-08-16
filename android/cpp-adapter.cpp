#include <jni.h>
#include "react-native-turbo-module.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_turbomodule_TurboModuleModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return turbomodule::multiply(a, b);
}
